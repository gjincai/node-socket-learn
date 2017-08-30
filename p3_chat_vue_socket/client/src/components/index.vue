<template>
  <div class="c-talk">
    <div v-if="!hasUserName" class="talk-name">
      <div class="name">
        <h3 class="name-tip">Let us chat together!</h3>
        <h3 class="name-title">What's your nickname?(<=10)</h3>
        <input class="name-input" type="text" maxlength="10" v-model="mineName" @keyup.enter="addUserName" />
      </div>
    </div>
    <div v-if="hasUserName" class="talk-cont">
      <ul class="cont-ul">
        <li class="mes-li" v-for="log in logMsg" :class="[log.m_type === 'center' ? 'mes-li-center' : (mineName === log.m_name ? 'mes-li-right' : 'mes-li-left')]">
          <div class="li-head" v-if="log.m_type === 'sides'"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box" v-if="log.m_type === 'sides'">
            <p class="box-name">{{log.m_name}}<span class="time">{{log.m_time}}</span> </p>
            <p class="box-mes">{{log.m_mes}}</p>
          </div>
          <p class="li-text" v-if="log.m_type === 'center'">{{log.m_name}} {{log.m_mes}}, 当前人数: {{log.m_num}} （{{log.m_time}}）</p>
        </li>
      </ul>
    </div>
    <div v-if="hasUserName" class="talk-edit">
      <textarea placeholder="请输入..." class="edit-text" v-model="chat.m_mes" ref="editText"></textarea>
      <div class="edit-btn">
        <a class="btn-a btn-clear" href="javascript:;">清空</a>
        <a class="btn-a btn-send" href="javascript:;" @click="sendChat">发送</a>
        <!--<a class="btn-a btn-exit" href="javascript:;">退出</a>-->
      </div>
    </div>
  </div>
</template>

<script>
//  import './../sass/index.scss'
import io from 'socket.io-client'
export default {
  data () {
    return {
      hasUserName: false,
      mineName: '',
      socket: null,
      date: new Date(),
      mes: {
        m_time: null,
        m_name: '',
        m_type: '',
        m_mes: '',
        m_num: 1
      },
      chat: {
        m_time: null,
        m_name: this.mineName,
        m_type: 'sides',
        m_mes: '',
        m_num: null
      },
      logMsg: [
        {
          m_time: '8月01日 11:31',
          m_name: 'test1',
          m_type: 'sides',
          m_mes: '测试聊天1',
          m_num: 1
        },
        {
          m_time: '8月01日 11:32',
          m_name: 'test2',
          m_type: 'center',
          m_mes: '加入/退出',
          m_num: 1
        },
        {
          m_time: '8月01日 11:33',
          m_name: 'test3',
          m_type: 'sides',
          m_mes: '测试聊天2',
          m_num: 1
        }
      ]
    }
  },
  created () {
    // this.addUserName()
  },
  methods: {
    addUserName () {
      this.mineName = this.mineName.replace(/\s+/g, '')
      this.mes.m_name = this.mineName
      if (this.mes.m_name.length > 0) {
        this.socket = io.connect('http://localhost:8081')
        this.mes.m_time = (this.date.getMonth() + 1) + '月' + this.date.getDate() + '日 ' + this.date.getHours() + ':' + this.date.getMinutes()
        this.mes.m_type = 'center'
        this.mes.m_mes = '加入'
        this.socket.emit('userJoining', this.mes)
        // change show
        this.hasUserName = true
        this.joinChat()
      }
    },
    joinChat () {
      let that = this
      this.socket.removeAllListeners()
      this.socket.on('userJoined', function (data) {
        console.log(data)
        that.mes = data.mes
        that.logMsg.push(data.mes)
      })
      this.socket.on('userQuit', function (data) {
        that.logMsg.push(data.mes)
      })
    },
    sendChat () {
      let that = this
      that.chat.m_mes = that.chat.m_mes.replace(/\s+/g, '')
      if (that.chat.m_mes.length > 0) {
        console.log('chat:' + this.chat.m_mes)
        that.chat.m_time = (that.date.getMonth() + 1) + '月' + that.date.getDate() + '日 ' + that.date.getHours() + ':' + that.date.getMinutes()
        that.chat.m_name = that.mineName
        that.logMsg.push({m_time: that.chat.m_time, m_name: that.chat.m_name, m_type: that.chat.m_type, m_mes: that.chat.m_mes, m_num: that.chat.m_num})
        this.socket.emit('sendChat', {chat: that.chat})
        that.chat.m_mes = ''
        that.$refs.editText.focus()
      } else {
        console.log('none mes')
      }
      this.socket.removeAllListeners()
      this.socket.on('newChat', function (data) {
        console.log(data)
        that.logMsg.push(data.mes)
      })
    }
  }
}
</script>

<style lang="scss" scope>
/*base*/
body,div,ul,li,h3,h4,h5,form,input,button,textarea,p {margin: 0;padding: 0;font-family: "Microsoft YaHei";font-size: 12px;border:none;}
address,em,strong,h3,h4,h5,i{font-style: normal;font-weight: normal;}
ul,li{list-style: none;}
a{color: black;text-decoration: none;outline: none; -webkit-tap-highlight-color:transparent;}
img{border: 0;}
html{font-size: 40px;background: #ffffff;-webkit-overflow-scrolling: touch;}
body{position:relative;max-width: 750px;min-width: 320px;margin:0 auto;background: #ffffff;}
p{text-align: justify;}

html,body{
  height:100%;
}

.c-talk{
  position: relative;
  box-sizing: border-box;
  max-width:600px;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  border: 1px solid #E6E6E6;
}
.talk-name{
  position: fixed;
  z-index: 99;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  .name{
    width:320px;
    margin: 50px auto 0;
    text-align: center;
    .name-tip{
      margin-bottom: 15px;
      font-size: 15px;
      color: #ffffff;
    }
    .name-title{
      margin-bottom: 20px;
      font-size: 18px;
      color: #ffffff;
    }
    .name-input{
      height:24px;
      padding: 5px 15px;
      outline: none;
      font-size: 18px;
      color: #01aefb;
      background: rgba(0,0,0,0);
      border-bottom: 1px solid #ffffff;
    }
  }
}
.talk-cont{
  padding: 5px 5px 100px;
  .mes-li{
    position: relative;
    overflow: hidden;
    margin-bottom:10px;
    .li-head{
      width:40px;
      height:40px;
      border-radius: 40px;
      img{
        width:40px;
        height:40px;
        border-radius: 40px;
      }
    }
    .li-box{
      max-width: 75%;
      overflow: hidden;
      .box-name{
        font-size: 14px;
        color: #01aefb;
        .time{
          display: inline-block;
          margin: 0 10px;
          color: #b8b8bb;
        }
      }
      .box-mes{
        display: inline-block;
        padding: 3px 10px;
        font-size:15px;
        background: #42c5ff;
        border-radius: 4px;
      }
    }
  }
  .mes-li-left{
    .li-head{
      float: left;
      margin-right:8px;
    }
    .li-box{
      .box-name{
        .time{
          margin-left: 10px;
        }
      }
    }
  }
  .mes-li-right{
    .li-head{
      float: right;
      margin-left:8px;
    }
    .li-box{
      float: right;
      .box-mes{
        float: right;
      }
      .box-name{
        text-align: right;
        .time{
          float: left;
          margin-right:10px;
        }
      }
    }
  }
  .mes-li-center{
    text-align: center;
    .li-text{
      display: inline-block;
      padding: 4px 10px;
      font-size: 13px;
      color: #b8b8bb;
      border-radius: 5px;
      background:#f3f4f5;
    }
  }
}
.talk-edit{
  position: fixed;
  bottom: 1px;
  width: 100%;
  height: 90px;
  max-width:598px;
  background: #ffffff;
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  .edit-text{
    box-sizing: border-box;
    width:100%;
    padding:5px;
    height:60px;
    font-size:15px;
    border: none;
    resize: none;
    outline: none;
  }
  .edit-btn{
    width: 100%;
    overflow: hidden;
    .btn-a{
      float: right;
      margin: 0 5px;
      padding: 3px 15px;
      color: #ffffff;
      border-radius: 4px;
      background: #42c5ff;
      &:active{
        background: #168af3;
      }
    }
  }
}


</style>
