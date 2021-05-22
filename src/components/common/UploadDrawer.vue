<template>
  <el-drawer title="开始上传" :visible.sync="isVisible" :before-close="handleClose">
    <!-- 文件上传盒 -->
    <uploader ref="uploader" :options="options" :fileStatusText="fileStatusText"
              @file-added="onFileAdded" @file-success="onFileSuccess" @file-error="onFileError">
      <uploader-drop class="dragBox">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处</div>
      </uploader-drop>
      <div class="buttonGroup">
        <uploader-btn>选择文件</uploader-btn>
        <uploader-btn :directory="true">选择文件夹</uploader-btn>
      </div>
      <!-- 上传队列显示盒 -->
      <uploader-list>
        <div slot-scope="props">
          <div v-for="file in props.fileList" :key="file.id">
            <!-- 自定义的数据不在v-for的响应依赖体系之中，所以使用file对象原isRoot属性代替 -->
            <div v-loading="file.isRoot" element-loading-text="文件校验中..." element-loading-spinner="el-icon-loading">
              <uploader-file :file="file" :list="true"></uploader-file>
            </div>
          </div>
        </div>
      </uploader-list>
    </uploader>
  </el-drawer>
</template>

<script>
import UploaderBtn from "vue-simple-uploader/src/components/btn"
import UploaderDrop from "vue-simple-uploader/src/components/drop"
import UploaderList from "vue-simple-uploader/src/components/list"
import uploadUrl from "@/api/file"
import local from "@/store/local"
import SparkMD5 from 'spark-md5'
import {beautySub} from "@/utils/baseUtils";

export default {
  name: "UploadDrawer",
  components: {UploaderBtn, UploaderDrop, UploaderList},
  data() {
    return {
      test: 0,
      options: {
        target: uploadUrl,
        chunkSize: '2048000',
        fileParameterName: 'file',
        maxChunkRetries: 0,
        simultaneousUploads: 3,
        chunkRetryInterval: 100,
        prioritizeFirstAndLastChunk: true,
        testChunks: false,
        autoStart: false,
        // 秒传和分片上传
        checkChunkUploadedByResponse: (chunk, message) => {
          let response = JSON.parse(message)
          return !!response.data
        },
        query: {
          enableChunk: true,
          folderHash: '',
        },
        headers: {
          token: local.getToken(),
        },
      },
      fileStatusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中...',
        paused: ' ',
        waiting: '等待中...',
      },
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getUploadDrawer
      },
      set(val) {
        this.$store.commit('setUploadDrawer', val)
      },
    },
    currentFolderHash() {
      return this.$store.getters.getFolderHash
    }
  },
  watch: {
    currentFolderHash: {
      handler(val) {
        this.options.query.folderHash = val === undefined ? 'root' : val
      },
      immediate: true,
    },
  },
  methods: {
    handleClose(done) {
      const uploaderInstance = this.$refs['uploader'].uploader
      if (uploaderInstance.isUploading()) {
        setTimeout(() => {
          this.$notify({
            title: '提示',
            message: '上传将在后台完成，请勿关闭浏览器!',
            type: 'warning',
            position: 'top-left',
          })
        }, 500)
      }
      done()
    },
    // 上传事件监听: 队列添加 上传成功 上传失败
    onFileAdded(file) {
      this.computeMD5(file)
    },
    onFileSuccess(file) {
      setTimeout(() => {
        if (!this.isVisible) {
          this.$notify({
            title: '提示',
            message: `文件${file.name}已上传成功！`,
            type: 'success',
            position: 'top-left',
          })
        }
        file.cancel()
      }, 1500)
      this.$store.dispatch('listContent')
    },
    onFileError(rootFile, file, message) {
      let response = JSON.parse(message)
      this.$notify({
        title: '提示',
        dangerouslyUseHTMLString: true,
        message: '<div>文件'+ beautySub(file.name, 6) +'上传失败！</div><strong>'+ response.message +'</strong>',
        type: 'error',
        position: 'top-left',
      })
    },
    // md5计算
    computeMD5(file) {
      let fileReader = new FileReader()
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
      let currentChunk = 0
      const chunkSize = 10 * 1024 * 1000
      let chunks = Math.ceil(file.size / chunkSize)
      let spark = new SparkMD5.ArrayBuffer()
      file.isRoot = true
      file.pause()
      loadNext()
      fileReader.onload = (e => {
        spark.append(e.target.result)
        if (currentChunk < chunks) {
          currentChunk++
          loadNext()
        } else {
          file.uniqueIdentifier = spark.end()
          file.isRoot = false
          file.resume()
        }
      })
      // 异常捕捉
      fileReader.onerror = function () {
        this.$notify({
          title: '警告',
          message: `文件${file.name}读取出错，请检查该文件`,
          type: 'error',
          position: 'top-left',
        })
        file.md5Start = false
        file.cancel()
      }
      
      // 加载并计算下一个分片
      function loadNext() {
        let start = currentChunk * chunkSize
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end))
      }
    },
  },
}
</script>

<style scoped>

.dragBox {
  height: 120px;
  text-align: center;
  background-color: #ffffff;
}

.dragBox > i {
  font-size: 67px;
  color: #c0c4cc;
}

.dragBox > span {
  font-size: 18px;
  font-weight: 550;
}

.buttonGroup {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  justify-items: center;
}

.buttonGroup > .uploader-btn {
  font-size: 15px;
  color: #ffffff;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 10px;
}

</style>