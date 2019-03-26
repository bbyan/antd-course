export default {
    singular:true, //页面代码单页
    //路由
    routes: [{
        path: '/',
        component:'./HelloWorld',
    }],
    plugins:[
        ['umi-plugin-react',{

        }],
    ],
};
