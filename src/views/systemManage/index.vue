<template>
    <div style="width:84.3%;height:100%;">
        <div class="main">
            <div class="main_box">
                <div class="main_top">
                    <div :class="{active:mainTop===0}" @click="mainTop=0">杭州市</div>
                    <div :class="{active:mainTop===1}" @click="mainTop=1">萧山区</div>
                    <select :class="{active:mainTop===2}" @click="mainTop=2">
                        <option value ="瓜沥镇">瓜沥镇</option>
                        <option value ="临浦镇">临浦镇</option>
                        <option value="义桥镇">义桥镇</option>
                        <option value="戴村镇">戴村镇</option>
                    </select>
                </div>
                <div class="main_two_box">
                    <el-input style="width:318px;" placeholder="请输入文件名称" suffix-icon="el-icon-search" v-model="input1"></el-input>
                    <el-button class="select" type="primary">查询</el-button>
                    <el-button class="reset">重置</el-button>
                    <el-button class="add" type="primary" @click="add">新增</el-button>
                </div>
                <!-- 表格 -->
                <div class="table_list">
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark">
                        <el-table-column prop="order" label="序号" width="50"></el-table-column>
                        <el-table-column prop="name" label="名称" width="300"></el-table-column>
                        <el-table-column prop="link" label="外部链接"></el-table-column>
                        <el-table-column prop="founder" label="创建人"></el-table-column>
                        <el-table-column prop="createTime" label="创建时间"></el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <p class="operation_btn">预览</p>
                                <p class="operation_btn" style="margin:0 15px;">下载</p>
                                <p class="operation_btn">删除</p>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <!-- 分页 -->
                <div class="page">
                    <el-pagination  background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 新增弹窗 -->
        <div class="add_model" v-if="show">
            <div class="model_div">
                <div class="model_top">
                    <p>新增文件 - 杭州市</p>
                    <span @click="close">×</span>
                </div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入文件名称"></el-input>
                    </el-form-item>
                    <el-form-item label="文件" prop="file">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-remove="handleRemove"
                        accept=".png,.jpg"
                        :limit="1"
                        :on-success="success"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary" v-if="isShow">上传</el-button>
                      </el-upload>
                    </el-form-item>
                    <el-form-item label="外部链接">
                        <el-input v-model="ruleForm.link"></el-input>
                    </el-form-item>
                    <el-form-item class="model_btn">
                        <el-button type="info" plain class="model_btn_a" @click="cell">取消</el-button>
                        <el-button class="model_btn_a" type="primary" @click="sure">确定</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InnovationManagementSystem',
    data() {
      return {
        leftTab : 0,
        mainTop : 0,
        input1 : '',
        // 表格数据
        tableData: [{
          order: '1',
          name: '市委办公厅：《关于印发新时代规范村》',
          link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '2',
          name: '市委办公厅：《关于印发新时代规范村》',
          link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '3',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '4',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '5',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '6',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '7',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '8',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '9',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }, {
          order: '10',
          name: '市委办公厅：《关于印发新时代规范村》',
            link: 'https:www.dtw.3yhc',
          founder: 'admin',
          createTime: '2021-05-20 18:18:10',
        }],
        currentPage4: 1,   //分页
        ruleForm: {
          name: '',
          link: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入文件名称', trigger: 'blur' },
          ],
          file: [
            { required: true, message: '请上传文件', trigger: 'blur' },
          ],
        },
        show:false,
        isShow : true
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    //    点击新增
        add(){
            this.show = true;
        },
      //点击关闭
      close(){
          this.show = false;
      },
    //   点击取消
        cell(){
            this.show = false;
        },
        // 点击确定
        sure(){
            this.show = false;
        },
        success(){
          this.isShow = false
        },
        handleRemove(){
          this.isShow = true
        }
    },
}
</script>

<style scoped>
    .main_top{width:97.2%;height:50px;border-bottom:2px solid #F7F7F7;margin-left:2.5%;margin-top:18px;display: flex;align-items: center;padding-left: 23px;}
    .main_top div{font-size: 12px;color:#666;line-height: 12px;height:100%;display: flex;align-items: center;margin-right:20px;cursor: pointer;}
    .main_top select{border:none;font-size: 12px;color:#666;line-height: 12px;height:100%;display: flex;align-items: center;outline:none;cursor: pointer;}
    .main_top .active{color:#3385FF;border-bottom:1px solid #3385FF;}
    .main_two_box{width:97.2%;margin-left:2.5%;margin-top:14px;display: flex;align-items: center;position: relative;}
    .select{margin-left: 25px;width:126px;}
    .reset{margin-left: 14px;width:126px;}
    .add{width:126px;position: absolute;right:0;}
    .table_list{margin-top:20px;width:97.2%;margin-left:2.5%;}
    .table_list>>>.el-table th, .el-table tr{background-color:#F7F9FA!important;text-align: center;}
    .table_list>>>.el-table--enable-row-transition .el-table__body td{text-align: center;}
    .table_list>>>.el-table__body, .el-table__footer, .el-table__header{width:100%!important;}
    .table_list>>>.el-table__header-wrapper table{width:100%!important;}
    .table_list>>>.el-table .cell{display: flex;justify-content: center;}
    .operation_btn{color:#0489FF;font-size: 14px;cursor: pointer;}
    .page{float:right;margin-top:30px;margin-right:10px;}
    .add_model{width:100%;height:100%;background-color:rgba(0,0,0,0.5);position: fixed;top:0;left:0;z-index:99;display: flex;align-items: center;justify-content: center;}
    .model_div{width:30%;height:80%;background-color:#fff;border-radius: 5px;position: relative;}
    .model_top{width:100%;height:50px;border-bottom:1px solid #D7D7D7;display: flex;align-items: center;position: relative;}
    .model_top p{font-size: 13px;color:#333;margin-left: 20px;}
    .model_top span{font-size: 37px;color:#BFBFBF;position: absolute;right:20px;cursor: pointer;}
    .demo-ruleForm>>>.el-input__inner{width:70%;}
    .demo-ruleForm{margin-top:25px;}
    .demo-ruleForm>>>.el-form-item__label{padding: 0 24px 0 20px;text-align: left;}
    .model_btn{position: absolute;bottom:5%;width: 100%;display: flex;justify-content: center;}
    .model_btn_a{width:126px;}
    .model_btn>>>.el-form-item__content{margin-left:unset!important;}
    .upload-demo{display: flex;align-items: center;width: 70%;}
    .upload-demo>>>.el-upload{width:unset!important;}
    .upload-demo>>>.el-upload-list{width:100%;}
</style>
