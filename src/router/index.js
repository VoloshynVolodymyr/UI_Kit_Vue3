import {createRouter, createWebHistory} from "vue-router"
import Index from '@/views/Index.vue'
import Button from '@/views/Button.vue'
import Radiobutton from '@/views/Radiobutton.vue'
import Checkbox from '@/views/Checkbox.vue'
import Typography from '@/views/Typography.vue'
import Progress from '@/views/Progress.vue'
import Input from '@/views/Input.vue'
import Alert from '@/views/Alert.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/button',
            name: 'Button',
            component: Button,
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography,
        },
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: Checkbox,
        },
        {
            path: '/radiobutton',
            name: 'Radiobutton',
            component: Radiobutton,
        },
        {
            path: '/progress',
            name: 'Progress',
            component: Progress,
        },
        {
            path: '/input',
            name: 'Input',
            component: Input,
        },
        {
            path: '/alert',
            name: 'Alert',
            component: Alert,
        },
    ]
})

export default router;