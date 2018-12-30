import ToastComponet from "./hxj-mobile-toast.vue"
 let Toast ={};
Toast.install=function(Vue,options){
    var opt={
        duration :3000
    }
    for(var key in options){
        opt[key]=options[key];
    }
    Vue.prototype.$toast=function(massage,option){
        if(typeof option=="object"){
            for(var key in option){
                opt[key]=option[key];
            }
        }
        const ToastController=Vue.extend(ToastComponet)
        var instance=new ToastController().$mount(document.createElement("div"))
        instance.message=massage
        instance.visible=true;
        document.body.appendChild(instance.$el)
        setTimeout(()=>{
            instance.visible=false;
            document.body.removeChild(instance.$el)
        },opt.duration)
    }
    Vue.prototype.$toast['show']=function(massage,option){
        Vue.prototype.$toast(massage,option)
    }
    Vue.prototype.$toast['info']=function(){
        Vue.prototype.$toast(massage,option)
    }
    Vue.prototype.$toast['error']=function(){
        Vue.prototype.$toast(massage,option)
    }
    Vue.prototype.$toast['success']=function(){
        Vue.prototype.$toast(massage,option)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Toast);
}
export default Toast;