Vue.directive('clickoutside', {
	bind : function(el, binding, vnode) {
		function documentHandler(e) {
			if (el.contains(e.target)) { // 判断点击的区域是否是指令所在的元素内部。
				return false;
			}
			if (binding.expression) { // 判断当前指令有没有写表达式
				binding.value(e); // 用来执行当前上下文methods中指定的函数
			}
		}
		el.__vueClickOutside__ = documentHandler; // 用于在unbind钩子里移除对document的click事件监听。
		document.addEventListener('click', documentHandler);
	},
	unbind : function(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
});
