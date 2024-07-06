(()=>{var e,s,r,a={31755:(e,s,r)=>{"use strict";r.d(s,{P:()=>q});var a=r(85471),o=r(95353),i=r(59097),n=r(87485),d=r(26304),c=r(85168),u=r(63814),p=r(65043),l=r(15916),m=r(39654);r(51257);const g=function(e){return e.replace(/\/$/,"")},h=()=>(0,m.C)(),f=(e,t)=>p.Ay.get(g(e),t),A=(e,t)=>p.Ay.post(g(e),t),b=(e,t)=>p.Ay.put(g(e),t),y=(e,t)=>p.Ay.delete(g(e),{params:t});var I=r(36620),U=r(96763);const v=(0,i.c0)("settings").persist(!0).build(),L={id:"",name:"",usercount:0,disabled:0,canAdd:!0,canRemove:!0},w={users:[],groups:[],orderBy:l.q.UserCount,minPasswordLength:0,usersOffset:0,usersLimit:25,disabledUsersOffset:0,disabledUsersLimit:25,userCount:0,showConfig:{showStoragePath:"true"===v.getItem("account_settings__showStoragePath"),showUserBackend:"true"===v.getItem("account_settings__showUserBackend"),showLastLogin:"true"===v.getItem("account_settings__showLastLogin"),showNewUserForm:"true"===v.getItem("account_settings__showNewUserForm"),showLanguages:"true"===v.getItem("account_settings__showLanguages")}},P={appendUsers(e,t){const s=e.users.map((e=>{let{id:t}=e;return t})),r=Object.values(t).filter((e=>{let{id:t}=e;return!s.includes(t)})),a=e.users.concat(r);e.usersOffset+=e.usersLimit,e.users=a},updateDisabledUsers(e,t){e.disabledUsersOffset+=e.disabledUsersLimit},setPasswordPolicyMinLength(e,t){e.minPasswordLength=""!==t?t:0},initGroups(e,t){let{groups:s,orderBy:r,userCount:a}=t;e.groups=s.map((e=>Object.assign({},L,e))),e.orderBy=r,e.userCount=a},addGroup(e,t){let{gid:s,displayName:r}=t;try{if(void 0!==e.groups.find((e=>e.id===s)))return;const t=Object.assign({},L,{id:s,name:r});e.groups.unshift(t)}catch(e){U.error("Can't create group",e)}},renameGroup(e,t){let{gid:s,displayName:r}=t;const a=e.groups.findIndex((e=>e.id===s));if(a>=0){const t=e.groups[a];t.name=r,e.groups.splice(a,1,t)}},removeGroup(e,t){const s=e.groups.findIndex((e=>e.id===t));s>=0&&e.groups.splice(s,1)},addUserGroup(e,t){let{userid:s,gid:r}=t;const a=e.groups.find((e=>e.id===r)),o=e.users.find((e=>e.id===s));a&&o.enabled&&e.userCount>0&&a.usercount++,o.groups.push(r)},removeUserGroup(e,t){let{userid:s,gid:r}=t;const a=e.groups.find((e=>e.id===r)),o=e.users.find((e=>e.id===s));a&&o.enabled&&e.userCount>0&&a.usercount--;const i=o.groups;i.splice(i.indexOf(r),1)},addUserSubAdmin(e,t){let{userid:s,gid:r}=t;e.users.find((e=>e.id===s)).subadmin.push(r)},removeUserSubAdmin(e,t){let{userid:s,gid:r}=t;const a=e.users.find((e=>e.id===s)).subadmin;a.splice(a.indexOf(r),1)},deleteUser(e,t){const s=e.users.findIndex((e=>e.id===t));this.commit("updateUserCounts",{user:e.users[s],actionType:"remove"}),e.users.splice(s,1)},addUserData(e,t){const s=t.data.ocs.data;e.users.unshift(s),this.commit("updateUserCounts",{user:s,actionType:"create"})},enableDisableUser(e,t){let{userid:s,enabled:r}=t;const a=e.users.find((e=>e.id===s));a.enabled=r,this.commit("updateUserCounts",{user:a,actionType:r?"enable":"disable"})},updateUserCounts(e,t){let{user:s,actionType:r}=t;if(0===e.userCount)return;const a=e.groups.find((e=>"disabled"===e.id));switch(r){case"enable":case"disable":a.usercount+=s.enabled?-1:1,e.userCount+=s.enabled?1:-1,s.groups.forEach((t=>{e.groups.find((e=>e.id===t)).disabled+=s.enabled?-1:1}));break;case"create":e.userCount++,s.groups.forEach((t=>{e.groups.find((e=>e.id===t)).usercount++}));break;case"remove":s.enabled?(e.userCount--,s.groups.forEach((t=>{const s=e.groups.find((e=>e.id===t));s?s.usercount--:U.warn("User group "+t+" does not exist during user removal")}))):(a.usercount--,s.groups.forEach((t=>{e.groups.find((e=>e.id===t)).disabled--})));break;default:I.A.error("Unknown action type in updateUserCounts: '".concat(r,"'"))}},setUserData(e,t){let{userid:s,key:r,value:a}=t;if("quota"===r){const t=(0,d.lT)(a,!0);e.users.find((e=>e.id===s))[r][r]=null!==t?t:a}else e.users.find((e=>e.id===s))[r]=a},resetUsers(e){e.users=[],e.usersOffset=0,e.disabledUsersOffset=0},setShowConfig(e,t){let{key:s,value:r}=t;v.setItem("account_settings__".concat(s),JSON.stringify(r)),e.showConfig[s]=r},setGroupSorting(e,s){const r=e.orderBy;e.orderBy=s,p.Ay.post((0,u.Jv)("/settings/users/preferences/group.sortBy"),{value:String(s)}).catch((s=>{e.orderBy=r,(0,c.Qg)(t("settings","Could not set group sorting")),I.A.error(s)}))}},_={getUsers:e=>e.users,getGroups:e=>e.groups,getSubadminGroups:e=>e.groups.filter((e=>"admin"!==e.id&&"disabled"!==e.id)),getSortedGroups(e){const t=[...e.groups];return e.orderBy===l.q.UserCount?t.sort(((e,t)=>{const s=e.usercount-e.disabled,r=t.usercount-t.disabled;return s<r?1:r<s?-1:e.name.localeCompare(t.name)})):t.sort(((e,t)=>e.name.localeCompare(t.name)))},getGroupSorting:e=>e.orderBy,getPasswordPolicyMinLength:e=>e.minPasswordLength,getUsersOffset:e=>e.usersOffset,getUsersLimit:e=>e.usersLimit,getDisabledUsersOffset:e=>e.disabledUsersOffset,getDisabledUsersLimit:e=>e.disabledUsersLimit,getUserCount:e=>e.userCount,getShowConfig:e=>e.showConfig},C=p.Ay.CancelToken;let E=null;const R={state:w,mutations:P,getters:_,actions:{searchUsers(e,t){let{offset:s,limit:r,search:a}=t;return a="string"==typeof a?a:"",f((0,u.KT)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:s,limit:r,search:a})).catch((t=>{p.Ay.isCancel(t)||e.commit("API_FAILURE",t)}))},getUser:(e,t)=>f((0,u.KT)("cloud/users/".concat(t))).catch((t=>{p.Ay.isCancel(t)||e.commit("API_FAILURE",t)})),getUsers(e,t){let{offset:s,limit:r,search:a,group:o}=t;return E&&E.cancel("Operation canceled by another search request."),E=C.source(),a="string"==typeof a?a:"",a=a.replace(/in:[^\s]+/g,"").trim(),o="string"==typeof o?o:"",""!==o?f((0,u.KT)("cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}",{group:encodeURIComponent(o),offset:s,limit:r,search:a}),{cancelToken:E.token}).then((t=>{const s=Object.keys(t.data.ocs.data.users).length;return s>0&&e.commit("appendUsers",t.data.ocs.data.users),s})).catch((t=>{p.Ay.isCancel(t)||e.commit("API_FAILURE",t)})):f((0,u.KT)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:s,limit:r,search:a}),{cancelToken:E.token}).then((t=>{const s=Object.keys(t.data.ocs.data.users).length;return s>0&&e.commit("appendUsers",t.data.ocs.data.users),s})).catch((t=>{p.Ay.isCancel(t)||e.commit("API_FAILURE",t)}))},async getDisabledUsers(e,t){let{offset:s,limit:r,search:a}=t;const o=(0,u.KT)("cloud/users/disabled?offset={offset}&limit={limit}&search={search}",{offset:s,limit:r,search:a});try{const t=await f(o),s=Object.keys(t.data.ocs.data.users).length;return s>0&&(e.commit("appendUsers",t.data.ocs.data.users),e.commit("updateDisabledUsers",t.data.ocs.data.users)),s}catch(t){e.commit("API_FAILURE",t)}},getGroups(e,t){let{offset:s,limit:r,search:a}=t;a="string"==typeof a?a:"";const o=-1===r?"":"&limit=".concat(r);return f((0,u.KT)("cloud/groups?offset={offset}&search={search}",{offset:s,search:a})+o).then((t=>Object.keys(t.data.ocs.data.groups).length>0&&(t.data.ocs.data.groups.forEach((function(t){e.commit("addGroup",{gid:t,displayName:t})})),!0))).catch((t=>e.commit("API_FAILURE",t)))},getUsersFromList(e,t){let{offset:s,limit:r,search:a}=t;return a="string"==typeof a?a:"",f((0,u.KT)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:s,limit:r,search:a})).then((t=>Object.keys(t.data.ocs.data.users).length>0&&(e.commit("appendUsers",t.data.ocs.data.users),!0))).catch((t=>e.commit("API_FAILURE",t)))},getUsersFromGroup(e,t){let{groupid:s,offset:r,limit:a}=t;return f((0,u.KT)("cloud/users/{groupId}/details?offset={offset}&limit={limit}",{groupId:encodeURIComponent(s),offset:r,limit:a})).then((t=>e.commit("getUsersFromList",t.data.ocs.data.users))).catch((t=>e.commit("API_FAILURE",t)))},getPasswordPolicyMinLength:e=>!(!(0,n.F)().password_policy||!(0,n.F)().password_policy.minLength)&&(e.commit("setPasswordPolicyMinLength",(0,n.F)().password_policy.minLength),(0,n.F)().password_policy.minLength),addGroup:(e,t)=>h().then((s=>A((0,u.KT)("cloud/groups"),{groupid:t}).then((s=>(e.commit("addGroup",{gid:t,displayName:t}),{gid:t,displayName:t}))).catch((e=>{throw e})))).catch((s=>{throw e.commit("API_FAILURE",{gid:t,error:s}),s})),renameGroup(e,t){let{groupid:s,displayName:r}=t;return h().then((t=>b((0,u.KT)("cloud/groups/{groupId}",{groupId:encodeURIComponent(s)}),{key:"displayname",value:r}).then((t=>(e.commit("renameGroup",{gid:s,displayName:r}),{groupid:s,displayName:r}))).catch((e=>{throw e})))).catch((t=>{throw e.commit("API_FAILURE",{groupid:s,error:t}),t}))},removeGroup:(e,t)=>h().then((s=>y((0,u.KT)("cloud/groups/{groupId}",{groupId:encodeURIComponent(t)})).then((s=>e.commit("removeGroup",t))).catch((e=>{throw e})))).catch((s=>e.commit("API_FAILURE",{gid:t,error:s}))),addUserGroup(e,t){let{userid:s,gid:r}=t;return h().then((t=>A((0,u.KT)("cloud/users/{userid}/groups",{userid:s}),{groupid:r}).then((t=>e.commit("addUserGroup",{userid:s,gid:r}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:s,error:t})))},removeUserGroup(e,t){let{userid:s,gid:r}=t;return h().then((t=>y((0,u.KT)("cloud/users/{userid}/groups",{userid:s}),{groupid:r}).then((t=>e.commit("removeUserGroup",{userid:s,gid:r}))).catch((e=>{throw e})))).catch((t=>{throw e.commit("API_FAILURE",{userid:s,error:t}),t}))},addUserSubAdmin(e,t){let{userid:s,gid:r}=t;return h().then((t=>A((0,u.KT)("cloud/users/{userid}/subadmins",{userid:s}),{groupid:r}).then((t=>e.commit("addUserSubAdmin",{userid:s,gid:r}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:s,error:t})))},removeUserSubAdmin(e,t){let{userid:s,gid:r}=t;return h().then((t=>y((0,u.KT)("cloud/users/{userid}/subadmins",{userid:s}),{groupid:r}).then((t=>e.commit("removeUserSubAdmin",{userid:s,gid:r}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:s,error:t})))},wipeUserDevices:(e,t)=>h().then((e=>A((0,u.KT)("cloud/users/{userid}/wipe",{userid:t})).catch((e=>{throw e})))).catch((s=>e.commit("API_FAILURE",{userid:t,error:s}))),deleteUser:(e,t)=>h().then((s=>y((0,u.KT)("cloud/users/{userid}",{userid:t})).then((s=>e.commit("deleteUser",t))).catch((e=>{throw e})))).catch((s=>e.commit("API_FAILURE",{userid:t,error:s}))),addUser(e,t){let{commit:s,dispatch:r}=e,{userid:a,password:o,displayName:i,email:n,groups:d,subadmin:c,quota:p,language:l,manager:m}=t;return h().then((e=>A((0,u.KT)("cloud/users"),{userid:a,password:o,displayName:i,email:n,groups:d,subadmin:c,quota:p,language:l,manager:m}).then((e=>r("addUserData",a||e.data.ocs.data.id))).catch((e=>{throw e})))).catch((e=>{throw s("API_FAILURE",{userid:a,error:e}),e}))},addUserData:(e,t)=>h().then((s=>f((0,u.KT)("cloud/users/{userid}",{userid:t})).then((t=>e.commit("addUserData",t))).catch((e=>{throw e})))).catch((s=>e.commit("API_FAILURE",{userid:t,error:s}))),enableDisableUser(e,t){let{userid:s,enabled:r=!0}=t;const a=r?"enable":"disable";return h().then((t=>b((0,u.KT)("cloud/users/{userid}/{userStatus}",{userid:s,userStatus:a})).then((t=>e.commit("enableDisableUser",{userid:s,enabled:r}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:s,error:t})))},setUserData(e,t){let{userid:s,key:r,value:a}=t;const o=["email","displayname","manager"];return-1!==["email","language","quota","displayname","password","manager"].indexOf(r)&&"string"==typeof a&&(-1===o.indexOf(r)&&a.length>0||-1!==o.indexOf(r))?h().then((t=>b((0,u.KT)("cloud/users/{userid}",{userid:s}),{key:r,value:a}).then((t=>e.commit("setUserData",{userid:s,key:r,value:a}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:s,error:t}))):Promise.reject(new Error("Invalid request data"))},sendWelcomeMail:(e,t)=>h().then((e=>A((0,u.KT)("cloud/users/{userid}/welcome",{userid:t})).then((e=>!0)).catch((e=>{throw e})))).catch((s=>e.commit("API_FAILURE",{userid:t,error:s})))}};var T=r(32981),F=r(96763);const O={APPS_API_FAILURE(e,s){(0,c.Qg)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+s.error.response.data.data.message,{isHTML:!0}),F.error(e,s)},initCategories(e,t){let{categories:s,updateCount:r}=t;e.categories=s,e.updateCount=r},updateCategories(e,t){e.gettingCategoriesPromise=t},setUpdateCount(e,t){e.updateCount=t},addCategory(e,t){e.categories.push(t)},appendCategories(e,t){e.categories=t},setAllApps(e,t){e.apps=t},setError(e,t){let{appId:s,error:r}=t;Array.isArray(s)||(s=[s]),s.forEach((t=>{e.apps.find((e=>e.id===t)).error=r}))},clearError(e,t){let{appId:s,error:r}=t;e.apps.find((e=>e.id===s)).error=null},enableApp(e,t){let{appId:s,groups:r}=t;const a=e.apps.find((e=>e.id===s));a.active=!0,a.groups=r},setInstallState(e,t){let{appId:s,canInstall:r}=t;const a=e.apps.find((e=>e.id===s));a&&(a.canInstall=!0===r)},disableApp(e,t){const s=e.apps.find((e=>e.id===t));s.active=!1,s.groups=[],s.removable&&(s.canUnInstall=!0)},uninstallApp(e,t){e.apps.find((e=>e.id===t)).active=!1,e.apps.find((e=>e.id===t)).groups=[],e.apps.find((e=>e.id===t)).needsDownload=!0,e.apps.find((e=>e.id===t)).installed=!1,e.apps.find((e=>e.id===t)).canUnInstall=!1,e.apps.find((e=>e.id===t)).canInstall=!0},updateApp(e,t){const s=e.apps.find((e=>e.id===t)),r=s.update;s.update=null,s.version=r,e.updateCount--},resetApps(e){e.apps=[]},reset(e){e.apps=[],e.categories=[],e.updateCount=0},startLoading(e,t){Array.isArray(t)?t.forEach((t=>{a.Ay.set(e.loading,t,!0)})):a.Ay.set(e.loading,t,!0)},stopLoading(e,t){Array.isArray(t)?t.forEach((t=>{a.Ay.set(e.loading,t,!1)})):a.Ay.set(e.loading,t,!1)}},k={enableApp(e,s){let r,{appId:a,groups:o}=s;return r=Array.isArray(a)?a:[a],h().then((s=>(e.commit("startLoading",r),e.commit("startLoading","install"),A((0,u.Jv)("settings/apps/enable"),{appIds:r,groups:o}).then((s=>(e.commit("stopLoading",r),e.commit("stopLoading","install"),r.forEach((t=>{e.commit("enableApp",{appId:t,groups:o})})),f((0,u.Jv)("apps/files/")).then((()=>{s.data.update_required&&((0,c.cf)(t("settings","The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds."),{onClick:()=>window.location.reload(),close:!1}),setTimeout((function(){location.reload()}),5e3))})).catch((()=>{Array.isArray(a)||((0,c.Qg)(t("settings","Error: This app cannot be enabled because it makes the server unstable")),e.commit("setError",{appId:r,error:t("settings","Error: This app cannot be enabled because it makes the server unstable")}),e.dispatch("disableApp",{appId:a}))}))))).catch((t=>{e.commit("stopLoading",r),e.commit("stopLoading","install"),e.commit("setError",{appId:r,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:a,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:a,error:t})))},forceEnableApp(e,t){let s,{appId:r,groups:a}=t;return s=Array.isArray(r)?r:[r],h().then((()=>(e.commit("startLoading",s),e.commit("startLoading","install"),A((0,u.Jv)("settings/apps/force"),{appId:r}).then((t=>{e.commit("setInstallState",{appId:r,canInstall:!0})})).catch((t=>{e.commit("stopLoading",s),e.commit("stopLoading","install"),e.commit("setError",{appId:s,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:r,error:t})})).finally((()=>{e.commit("stopLoading",s),e.commit("stopLoading","install")}))))).catch((t=>e.commit("API_FAILURE",{appId:r,error:t})))},disableApp(e,t){let s,{appId:r}=t;return s=Array.isArray(r)?r:[r],h().then((t=>(e.commit("startLoading",s),A((0,u.Jv)("settings/apps/disable"),{appIds:s}).then((t=>(e.commit("stopLoading",s),s.forEach((t=>{e.commit("disableApp",t)})),!0))).catch((t=>{e.commit("stopLoading",s),e.commit("APPS_API_FAILURE",{appId:r,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:r,error:t})))},uninstallApp(e,t){let{appId:s}=t;return h().then((t=>(e.commit("startLoading",s),f((0,u.Jv)("settings/apps/uninstall/".concat(s))).then((t=>(e.commit("stopLoading",s),e.commit("uninstallApp",s),!0))).catch((t=>{e.commit("stopLoading",s),e.commit("APPS_API_FAILURE",{appId:s,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:s,error:t})))},updateApp(e,t){let{appId:s}=t;return h().then((t=>(e.commit("startLoading",s),e.commit("startLoading","install"),f((0,u.Jv)("settings/apps/update/".concat(s))).then((t=>(e.commit("stopLoading","install"),e.commit("stopLoading",s),e.commit("updateApp",s),!0))).catch((t=>{e.commit("stopLoading",s),e.commit("stopLoading","install"),e.commit("APPS_API_FAILURE",{appId:s,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:s,error:t})))},getAllApps:e=>(e.commit("startLoading","list"),f((0,u.Jv)("settings/apps/list")).then((t=>(e.commit("setAllApps",t.data.apps),e.commit("stopLoading","list"),!0))).catch((t=>e.commit("API_FAILURE",t)))),async getCategories(e){let{shouldRefetchCategories:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t||!e.state.gettingCategoriesPromise){e.commit("startLoading","categories");try{const t=f((0,u.Jv)("settings/apps/categories"));e.commit("updateCategories",t);const s=await t;return s.data.length>0?(e.commit("appendCategories",s.data),e.commit("stopLoading","categories"),!0):(e.commit("stopLoading","categories"),!1)}catch(t){e.commit("API_FAILURE",t)}}return e.state.gettingCategoriesPromise}},S={state:{apps:[],bundles:(0,T.C)("settings","appstoreBundles",[]),categories:[],updateCount:(0,T.C)("settings","appstoreUpdateCount",0),loading:{},gettingCategoriesPromise:null},mutations:O,getters:{loading:e=>function(t){return e.loading[t]},getCategories:e=>e.categories,getAllApps:e=>e.apps,getAppBundles:e=>e.bundles,getUpdateCount:e=>e.updateCount,getCategoryById:e=>t=>e.categories.find((e=>e.id===t))},actions:k},G={setServerData(e,t){e.serverData=t}},D={state:{serverData:(0,T.C)("settings","usersSettings",{})},mutations:G,getters:{getServerData:e=>e.serverData},actions:{}},K={state:{},mutations:{},getters:{},actions:{setAppConfig(e,t){let{app:s,key:r,value:a}=t;return h().then((e=>A((0,u.KT)("apps/provisioning_api/api/v1/config/apps/{app}/{key}",{app:s,key:r}),{value:a}).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{app:s,key:r,value:a,error:t})))}}};var N=r(96763);a.Ay.use(o.Ay);const x={API_FAILURE(e,s){try{const e=s.error.response.data.ocs.meta.message;(0,c.Qg)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+e,{isHTML:!0})}catch(e){(0,c.Qg)(t("settings","An error occurred during the request. Unable to proceed."))}N.error(e,s)}};let j=null;const q=()=>(null===j&&(j=new o.il({modules:{users:R,apps:S,settings:D,oc:K},strict:!1,mutations:x})),j)},15916:(e,t,s)=>{"use strict";var r;s.d(t,{q:()=>r}),function(e){e[e.UserCount=1]="UserCount",e[e.GroupName=2]="GroupName"}(r||(r={}))},36620:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});const r=(0,s(35947).YK)().setApp("settings").detectUser().build()},18539:(e,t,s)=>{"use strict";var r=s(85471),a=s(80284),o=s(58723),i=s(53334),n=s(22378);const d=(0,r.pM)({__name:"SettingsApp",setup:e=>({__sfc:!0,NcContent:n.A})}),c=(0,s(14486).A)(d,(function(){var e=this,t=e._self._c;return t(e._self._setupProxy.NcContent,{attrs:{"app-name":"settings"}},[t("router-view",{attrs:{name:"navigation"}}),e._v(" "),t("router-view"),e._v(" "),t("router-view",{attrs:{name:"sidebar"}})],1)}),[],!1,null,null,null).exports;var u=s(40173),p=s(63814);const l=[{name:"users",path:"/:index(index.php/)?settings/users",components:{default:()=>Promise.all([s.e(4208),s.e(1439),s.e(3239)]).then(s.bind(s,11594)),navigation:()=>Promise.all([s.e(4208),s.e(1439),s.e(3239)]).then(s.bind(s,92655))},props:!0,children:[{path:":selectedGroup",name:"group"}]},{path:"/:index(index.php/)?settings/apps",name:"apps",redirect:{name:"apps-category",params:{category:"discover"}},components:{default:()=>Promise.all([s.e(4208),s.e(1439),s.e(4529)]).then(s.bind(s,54989)),navigation:()=>Promise.all([s.e(4208),s.e(1439),s.e(4529)]).then(s.bind(s,53809)),sidebar:()=>Promise.all([s.e(4208),s.e(1439),s.e(4529)]).then(s.bind(s,43469))},children:[{path:":category",name:"apps-category",children:[{path:":id",name:"apps-details"}]}]}];r.Ay.use(u.Ay);const m=new u.Ay({mode:"history",base:(0,p.Jv)(""),linkActiveClass:"active",routes:l});var g,h=s(31755),f=s(21777),A=s(65899);r.Ay.use(a.Ay,{defaultHtml:!1});const b=(0,h.P)();(0,o.O)(b,m),s.nc=btoa(null!==(g=(0,f.do)())&&void 0!==g?g:""),r.Ay.prototype.t=i.Tl,r.Ay.prototype.n=i.zw,r.Ay.use(A.R2);const y=(0,A.Ey)();new r.Ay({router:m,store:b,pinia:y,render:e=>e(c),el:"#content"})},58723:(e,t)=>{function s(e,t){var r={name:e.name,path:e.path,hash:e.hash,query:e.query,params:e.params,fullPath:e.fullPath,meta:e.meta};return t&&(r.from=s(t)),Object.freeze(r)}t.O=function(e,t,r){var a=(r||{}).moduleName||"route";e.registerModule(a,{namespaced:!0,state:s(t.currentRoute),mutations:{ROUTE_CHANGED:function(t,r){e.state[a]=s(r.to,r.from)}}});var o,i=!1,n=e.watch((function(e){return e[a]}),(function(e){var s=e.fullPath;s!==o&&(null!=o&&(i=!0,t.push(e)),o=s)}),{sync:!0}),d=t.afterEach((function(t,s){i?i=!1:(o=t.fullPath,e.commit(a+"/ROUTE_CHANGED",{to:t,from:s}))}));return function(){null!=d&&d(),null!=n&&n(),e.unregisterModule(a)}}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=a,e=[],i.O=(t,s,r,a)=>{if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],a=e[u][2];for(var n=!0,d=0;d<s.length;d++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](s[d])))?s.splice(d--,1):(n=!1,a<o&&(o=a));if(n){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,r,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,s)=>(i.f[s](e,t),t)),[])),i.u=e=>(({3239:"settings-users",4529:"settings-apps-view"}[e]||e)+"-"+e+".js?v="+{1325:"f16b2493439cb6704c31",1439:"e8a47ca9c09dfe5fd109",1521:"7c0611767c590cd54232",3239:"340fd8c8e0de2cffea09",4529:"b16f9c48c79f36fbafb6",5244:"433f22a2bc2955582ebd",5390:"b557964cb893e4443ed2",8737:"41f38430e0c0380c362b"}[e]),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},r="nextcloud:",i.l=(e,t,a,o)=>{if(s[e])s[e].push(t);else{var n,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+a){n=p;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",r+a),n.src=e),s[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(m);var a=s[e];if(delete s[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=2689,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var r=s.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=s[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={2689:0};i.f.j=(t,s)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var a=new Promise(((s,a)=>r=e[t]=[s,a]));s.push(r[2]=a);var o=i.p+i.u(t),n=new Error;i.l(o,(s=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",n.name="ChunkLoadError",n.type=a,n.request=o,r[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,s)=>{var r,a,o=s[0],n=s[1],d=s[2],c=0;if(o.some((t=>0!==e[t]))){for(r in n)i.o(n,r)&&(i.m[r]=n[r]);if(d)var u=d(i)}for(t&&t(s);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),i.nc=void 0;var n=i.O(void 0,[4208],(()=>i(18539)));n=i.O(n)})();
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=5ec1091c9c8f32d00442