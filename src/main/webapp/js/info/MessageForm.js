MessageForm=Ext.extend(Ext.Panel,{formPanel:null,constructor:function(a){Ext.applyIf(this,a);this.initUIComponents();MessageForm.superclass.constructor.call(this,{id:"MessageForm",layout:"form",border:false,items:[this.formPanel]});},initUIComponents:function(){this.formPanel=new Ext.FormPanel({id:"mFormPanel",title:"发送信息",iconCls:"btn-sendM",border:true,draggable:true,width:560,height:320,style:"margin-top:5%;margin-left:15%;",defaultType:"textarea",url:__ctxPath+"/info/sendShortMessage.do",method:"post",reader:new Ext.data.JsonReader({root:"data",id:"messageId"},[{name:"userId",mapping:"senderId"},{name:"userFullname",mapping:"sender"}]),defaults:{allowBlank:false,selectOnFocus:true,msgTarget:"side"},layout:"form",buttonAlign:"center",bodyStyle:"padding:5px",items:[{xtype:"hidden",name:"userId",id:"userId"},{fieldLabel:"发送人",anchor:"60%",xtype:"combo",triggerAction:"all",editable:false,value:curUserInfo.fullname,displayField:"grantFullname",valueField:"grantUId",hiddenName:"senderId",store:new Ext.data.JsonStore({autoLoad:true,root:"result",url:__ctxPath+"/system/agentAppUser.do?isCombo=true&userId="+curUserInfo.userId,fields:["grantUId","grantFullname"]})},{xtype:"compositefield",fieldLabel:"收信人",items:[{xtype:"textarea",name:"userFullname",id:"userFullname",allowBlank:false,readOnly:true,width:290,height:50},{xtype:"container",border:false,width:100,items:[{xtype:"button",iconCls:"btn-mail_recipient",text:"添加联系人 ",width:80,handler:function(){UserSelector.getView(function(h,f){var c=Ext.getCmp("userId");var b=Ext.getCmp("userFullname");if(c.getValue()!=""&&b.getValue()!=""){var e=(c.getValue()+",").concat(h);var a=(b.getValue()+",").concat(f);var d=uniqueArray(e.split(","));var g=uniqueArray(a.split(","));c.setValue(d.toString());b.setValue(g.toString());}else{c.setValue(h);b.setValue(f);}}).show();}},{xtype:"button",text:"清除联系人",iconCls:"btn-del",width:80,handler:function(){var a=Ext.getCmp("userFullname");var b=Ext.getCmp("userId");a.reset();b.reset();}}]}]},{fieldLabel:"内容",id:"sendContent",xtype:"textarea",name:"content",width:380,height:120,autoScroll:true,allowBlank:false}],buttons:[{text:"发送",iconCls:"btn-mail_send",handler:this.send},{text:"重置",iconCls:"reset",handler:this.reset}]});},send:function(){var a=Ext.getCmp("mFormPanel");if(a.getForm().isValid()){a.getForm().submit({waitMsg:"正在 发送信息",success:function(b,c){var b=Ext.getCmp("mFormPanel");Ext.ux.Toast.msg("操作信息","信息发送成功！");b.getForm().reset();}});}},reset:function(){var a=Ext.getCmp("mFormPanel");a.getForm().reset();}});