<template>
  <div class="my-container">
    <div v-if="user" class="header user-info">
      <div class="bj">
        <img src="~@/assets/avatar.png" alt="" class="bjt" />
      </div>
      <div class="top">
        <div class="txk">
          <img :src="userInfo.photo" alt="" class="tx" />
        </div>
        <div class="myuser">
          <div class="myname">{{ userInfo.name }}</div>
          <div class="myesc">
            <span @click="onLogout" clickable>退出</span>
          </div>
          <div class="myedit">
            编辑个人资料
            <span class="myarrow">
              <i class="iconfont icon-arrow-right-filling"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="up">
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-favorite"> </i>
                  <span>我的收藏</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-home"> </i>
                  <span>我的出租</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-chart-pie"> </i>
                  <span>看房记录</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-column-vertical"> </i>
                  <span>成为房主</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-user"> </i>
                  <span>个人资料</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-customer-service"> </i>
                  <span>联系我们</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="join">
          <img src="~@/assets/join.png" alt="" />
        </div>
      </div>
    </div>

    <div v-else class="header not-login">
      <div class="bj">
        <img src="~@/assets/banner.png" alt="" class="bjt" />
      </div>
      <div class="top">
        <div class="txk">
          <img src="~@/assets/tx.png" alt="" class="tx" />
        </div>
        <div class="myuser">
          <div class="myname">游客</div>
          <div class="myesc">
            <span @click="$router.push('/login')">去登陆</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="up">
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-favorite"> </i>
                  <span>我的收藏</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-home"> </i>
                  <span>我的出租</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-chart-pie"> </i>
                  <span>看房记录</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-column-vertical"> </i>
                  <span>成为房主</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-user"> </i>
                  <span>个人资料</span>
                </div>
              </a>
            </div>
          </div>
          <div class="square">
            <div class="content" @click="$router.push()">
              <a href="#">
                <div class="mymenu">
                  <i class="iconfont icon-customer-service"> </i>
                  <span>联系我们</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="join">
          <img src="~@/assets/join.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { getUserInfo } from "@/api/user"
export default {
  name: "MyIndex",
  data() {
    return {
      userInfo: {},
    }
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({ title: "标题" }).then(() => {
        // onconfirm this.$store.commit("setUser", null) }) .catch(() => { // on cancel
      })
    },
    async loadUserInfo() {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast("获取数据失败，请稍后重试")
      }
    },
  },
  created() {
    if (this.user) {
      this.loadUserInfo()
    }
  },
}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 750px;
    width: 750px;
    position: absolute;
    .bj {
      width: 100%;
      .bjt {
        width: 100%;
      }
    }
    .top {
      position: absolute;
      background: #fff;
      width: 85%;
      height: 55%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 20px 6px #ddd;
      margin: 100px auto 0;
      padding: 0 10px;
      text-align: center;
      font-size: 13px;
      .txk {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        border: 10px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 4px 4px #bdbdbd;
        .tx {
          width: 100%;
          border-radius: 50%;
        }
      }
      .myuser {
        padding-top: 15px;
        .myname {
          margin-top: -30px;
          margin-bottom: 20px;
        }
        .myesc {
          margin-bottom: 50px;
          span {
            border-radius: 30px;
            color: #fff;
            padding: 5px 30px;
            background: #21b97a;
            font-size: 12px;
          }
        }
        .myedit {
          color: #999;
          font-size: 12px;
          margin-top: 20px;
          .myarrow {
            display: inline-block;
            margin-left: 3px;
            .icon-arrow-right-filling {
              font-size: 12px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      .up,
      .down {
        display: flex;
        flex: 1;
        .square {
          flex: 1;
          .content {
            width: 100%;
            padding: 40px 0;
            a {
              text-decoration: none;
              .mymenu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 13px;
                color: #333;
                i {
                  font-size: 50px;
                  margin-bottom: 20px;
                }
              }
            }
          }
        }
      }
      .join {
        text-align: center;
        margin-top: 20px;
        img {
          width: 92%;
        }
      }
    }
  }
}
</style>
