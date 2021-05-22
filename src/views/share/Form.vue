<template>
  <div>
    <el-page-header @click="$router.go(-1)" :content="entity.type === 1 ? '分享文件' : '分享文件夹'"></el-page-header>
    <div class="form-box">
      <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="100px">
        <el-form-item label="分享限制">
          <el-checkbox-group v-model="type">
            <el-checkbox label="timer">限制时间</el-checkbox>
            <el-checkbox label="number">限制访问次数</el-checkbox>
            <el-checkbox label="password">自定义密码</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-collapse-transition>
          <el-form-item v-if="type.includes('timer') && !form.dateNumber" label="到期时间" prop="dateTime">
            <el-date-picker type="datetime" placeholder="选择具体时间" v-model="form.dateTime" style="width: 100%;">
            </el-date-picker>
          </el-form-item>
        </el-collapse-transition>
        <el-collapse-transition>
          <el-form-item v-if="type.includes('timer') && !form.dateTime" label="到期时间" prop="dateNumber">
            <el-select v-model="form.dateNumber" clearable placeholder="或者选择相对时间" style="width: 100%;">
              <el-option label="一天" value="1"></el-option>
              <el-option label="三天" value="3"></el-option>
              <el-option label="七天" value="7"></el-option>
              <el-option label="一个月" value="30"></el-option>
              <el-option label="永久" value="-1"></el-option>
            </el-select>
          </el-form-item>
        </el-collapse-transition>
        <el-collapse-transition>
          <el-form-item v-if="type.includes('number')" label="访问次数" prop="number">
            <el-slider v-model="form.number" :min="1" :max="15" show-input></el-slider>
          </el-form-item>
        </el-collapse-transition>
        <el-collapse-transition>
          <el-form-item v-if="type.includes('password')" label="自定义密码" prop="password">
            <el-input type="text" placeholder="请输入自定义密码" v-model="form.password" maxlength="10" show-word-limit>
            </el-input>
          </el-form-item>
        </el-collapse-transition>
        <el-form-item class="button-group">
          <el-button disabled>关于</el-button>
          <el-button type="primary" @click="onSubmit">立即分享</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      info: '',
      type: [],
      form: {
        dateTime: '',
        dateNumber: '',
        number: 0,
        password: '',
      },
      rules: {
        dateTime: [
          {required: true, message: '请选择到期时间', trigger: ['blur', 'change']},
        ],
        dateNumber: [
          {required: true, message: '请选择到期时间', trigger: ['blur', 'change']},
        ],
        number: [
          {required: true, message: '请输入访问次数', trigger: 'blur'},
          {type: 'integer', message: '请输入整数', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入自定义密码', trigger: 'blur'},
        ],
      }
    }
  },
  computed: {
    entity() {
      return {
        type: this.$route.params.type,
        hash: this.$route.params.id,
      }
    },
  },
  watch: {
    entity: {
      handler() {
        // 发送请求获取文件或文件夹信息
        // if (val.type ===) {
        //
        // } else (val.type ===) {
        //
        // }
      },
      immediate: true,
    },
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs['form'].resetFields()
    }
  },
}
</script>

<style scoped>

.form-box {
  margin: 20px 0;
  display: flex;
  justify-items: center;
  justify-content: space-around;
}

.button-group {
  text-align: center;
}

</style>