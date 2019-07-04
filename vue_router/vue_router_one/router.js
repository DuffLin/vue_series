// 0. ���ʹ��ģ�黯���Ʊ�̣�����Vue��VueRouter��Ҫ���� Vue.use(VueRouter)

// 1. ���� (·��) �����
// ���Դ������ļ� import ����
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
    template: '<div>User{{ $route.params.id }}</div>'
}




// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ������� ����"component" ������
// ͨ�� Vue.extend() �����������������
// ���ߣ�ֻ��һ��������ö���
// �������������Ƕ��·�ɡ�
const routes = [
    {path:'/foo/:id',component:User},
    /*{path:'/bar',component:Bar}*/
]





// 3. ���� router ʵ����Ȼ�� `routes` ����
// �㻹���Դ�������ò���, ��������ô���Űɡ�
const router = new VueRouter({
    routes
})






// 4. �����͹��ظ�ʵ����
// �ǵ�Ҫͨ�� router ���ò���ע��·�ɣ�
// �Ӷ�������Ӧ�ö���·�ɹ���
const app = new Vue({
    router
}).$mount('#app');









