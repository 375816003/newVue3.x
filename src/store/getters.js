const getters = {
  loading: state => state.loading,
  // im聊天测试
  currentChatPerson: state => state.webim.currentChatPerson,
  newMsgList: state => state.webim.newMsgList,
  recentContactList: state => state.webim.recentContactList,
  msgHistoryList: state => state.webim.msgHistoryList,
  loginInfo: state => state.webim.loginInfo,
  infoMap: state => state.webim.infoMap,
  prePageC2CHistroyMsgInfoMap: state => state.webim.prePageC2CHistroyMsgInfoMap,
  prePageGroupHistroyMsgInfoMap: state => state.webim.prePageGroupHistroyMsgInfoMap,
  selType: state => state.webim.selType,
  selToID: state => state.webim.selToID,
  friendsList: state => state.webim.friendsList,
  groupList: state => state.webim.groupList,
  contactDoctors: state => state.webim.contactDoctors,
  contactPatients: state => state.webim.contactPatients,
  flag: state => state.webim.flag
};

export default getters;
