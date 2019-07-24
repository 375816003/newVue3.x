import session from 'storage';
const webim = {
  state: {
    selType: '' //当前聊天类型
      ,
    selToID: '' //当前选中聊天id（当聊天类型为私聊时，该值为好友帐号，否则为群号）
      ,
    currentChatPerson: null // 当前聊天对象
    ,
    newMsgList: [] //新消息
      ,
    recentContactList: [] //最近联系人 会话列表
      ,
    msgHistoryList: [] //c2c历史消息 
      ,
    loginInfo: {} //用户基本信息（当前使用IM聊天的用户）
    ,
    infoMap: {} //初始化时，可以先拉取我的好友和我的群组信息
    ,
    prePageC2CHistroyMsgInfoMap: {} //保留下一次拉取好友历史消息的信息
    ,
    prePageGroupHistroyMsgInfoMap: {} //保留下一次拉取群历史消息的信息
    ,
    selSess: null //当前聊天会话对象
      ,
    recentSessMap: {} //保存最近会话列表
      ,
    groupList: [] //群组列表
      ,
    contactDoctors: [] //当前患者关注的所有医生
      ,
    contactPatients: [] //当前患者关注的所有患者
      ,
    allContacts: [] //所有好友
    ,
    flag: true,
    permission: session.getSession('permissionOrg') //当前用户的权限
  },
  mutations: {
    setSelType(state, selType) {
      state.selType = selType;
    },
    setSelToID(state, selToID) {
      state.selToID = selToID;
    },
    setCurrentChatPerson(state, currentChatPerson) {
      state.currentChatPerson = currentChatPerson;
    },
    setNewMsgList(state, newMsgList) {
      state.newMsgList = newMsgList;
    },
    setRecentContactList(state, recentContactList) {
      state.recentContactList = recentContactList;
    },
    setMsgHistoryList(state, msgHistoryList) {
      state.msgHistoryList = msgHistoryList;
    },
    addMsgHistoryList(state, newMsgObj) {
      state.msgHistoryList.push(newMsgObj);
    },
    setLoginInfo(state, loginInfo) {
      // state.loginInfo = loginInfo;
      let stateLoginInfo = state.loginInfo;
      state.loginInfo = Object.assign(stateLoginInfo, loginInfo);
    },
    setInfoMap(state, infoMap) {
      // state.infoMap = infoMap;
      let stateInfoMap = state.infoMap;
      state.infoMap = Object.assign(stateInfoMap, infoMap);
    },
    setPrePageC2CHistroyMsgInfoMap(state, prePageC2CHistroyMsgInfoMap) {
      state.prePageC2CHistroyMsgInfoMap = prePageC2CHistroyMsgInfoMap;
    },
    setPrePageGroupHistroyMsgInfoMap(state, prePageGroupHistroyMsgInfoMap) {
      state.prePageGroupHistroyMsgInfoMap = Object.assign(state.prePageGroupHistroyMsgInfoMap, prePageGroupHistroyMsgInfoMap);
    },
    setSelSess(state, selSess) {
      let stateSelSess = state.selSess;
      if (stateSelSess === null) {
        state.selSess = selSess;
        return;
      }
      state.selSess = Object.assign(stateSelSess, selSess);
    },
    setRecentSessMap(state, recentSessMap) {
      state.recentSessMap = Object.assign(state.recentSessMap, recentSessMap);
    },
    setGroupList(state, groupList) {
      state.groupList = groupList;
    },
    setContactDoctors(state, contactDoctors) {
      state.contactDoctors = contactDoctors;
    },
    setContactPatients(state, contactPatients) {
      state.contactPatients = contactPatients;
    },
    setFlag(state, flag) {
      state.flag = flag;
    },
    setPermission(state, permission) {
      state.permission = permission;
    }
  },
  actions: {

  }

};

export default webim;
