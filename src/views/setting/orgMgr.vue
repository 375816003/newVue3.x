<template>
  <div class="view_contain orgMgr clearfix">
    <div class="orgsTree">
      <div class="treeContain">
        <ul id="treeDemo" class="ztree"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import session from "storage";
export default {
  data() {
    return {
      nodes:[]
    };
  },

  mounted() {
   this.getdownOrgs();
  },
  methods: {
   getdownOrgs(){
     let token = session.getSession('token');
     let id = session.getSession('userRes').admin.id;
     let data = {
       token:token,
       id:id
     }
     this.$api.setting.getdownOrgs(data).then(res=>{
       this.nodes = res.data;
       this.setTree();
     });
   },
   setTree(){
     let setting = {
			check: {
				enable: false
			},
			data: {
				simpleData: {
          enable: true,
          idKey: "id",
          pIdKey: "parentId",
          rootPId: 1
        }
			},
			callback: {
				onNodeCreated: function(){}
			}
    };

    let zNodes = this.nodes;
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
   }
  }
};
</script>

<style lang="scss" scoped>
#treeDemo{
  height: 300px;
}

</style>
