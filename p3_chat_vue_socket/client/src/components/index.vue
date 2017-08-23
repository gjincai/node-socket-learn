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
        <li class="mes-li" v-for="log in logMsg" :class="[log.m_mes === '' ? 'mes-li-center' : (mineName === log.m_name ? 'mes-li-right' : 'mes-li-left')]">
          <div class="li-head" v-if="log.m_mes !== ''"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box" v-if="log.m_mes !== ''">
            <p class="box-name">{{log.m_name}}<span class="time">{{log.m_time}}</span> </p>
            <p class="box-mes">{{log.m_mes}}</p>
          </div>
          <p class="li-text" v-if="log.m_mes === ''">{{log.m_name}} 加入还是退出 {{log.m_time}}</p>
        </li>
        <!--<li class="mes-li mes-li-left">-->
          <!--<div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>-->
          <!--<div class="li-box">-->
            <!--<p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>-->
            <!--<p class="box-mes">哈哈哈哈哈哈哈哈</p>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="mes-li mes-li-center">-->
          <!--<p class="li-text">2017/08/20/11:50 谁退出谁加入啦这是消息推送状态提醒</p>-->
        <!--</li>-->
        <!--<li class="mes-li mes-li-right">-->
          <!--<div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>-->
          <!--<div class="li-box">-->
            <!--<p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>-->
            <!--<p class="box-mes">哈哈哈哈哈哈哈哈</p>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
    <div v-if="hasUserName" class="talk-edit">
      <textarea placeholder="请输入..." class="edit-text"></textarea>
      <div class="edit-btn">
        <a class="btn-a btn-send" href="javascript:;">发送</a>
        <a class="btn-a btn-clear" href="javascript:;">清空</a>
        <a class="btn-a btn-exit" href="javascript:;">退出</a>
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
        m_head: '',
        m_name: '',
        m_mes: ''
      },
      logMsg: [
        {
          m_time: '8月01日 11:31',
          m_head: '',
          m_name: 'test1',
          m_mes: '测试聊天'
        },
        {
          m_time: '8月01日 11:32',
          m_head: '',
          m_name: 'test2',
          m_mes: ''
        },
        {
          m_time: '8月01日 11:33',
          m_head: '',
          m_name: 'test3',
          m_mes: '测试聊天'
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
        this.socket.emit('join', this.mes)
        // change show
        this.hasUserName = true
        this.chat()
      }
    },
    chat () {
      this.socket.on('news', function (data) {
        console.log(data)
      })
      this.socket.emit('chat', {msg: 'i had got the news'})
      let that = this
      this.socket.on('joinSuc', function (data) {
        that.mes = data
        that.logMsg.push(data)
        that.updateLog(data)
      })
    },
    updateLog (mes) {
      console.log(mes)
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
