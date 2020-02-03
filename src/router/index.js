import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import Home from '@/components/home/Home'
import Popular from '@/components/home/Popular'
import Recents from '@/components/home/Recents'
import Curated from '@/components/home/Curated'
import Admin from '@/components/admin/Admin'
import Profile from '@/components/profile/Profile'
import About from '@/components/About'
import Data from '@/components/profile/Data'
import Images from '@/components/profile/Images'
import Albums from '@/components/profile/Albums'
import Likes from '@/components/profile/Likes'
import Saves from '@/components/profile/Saves'
import ViewsHistory from '@/components/profile/ViewsHistory'
import ModQueue from '@/components/admin/ModQueue'
import AcceptedImages from '@/components/admin/AcceptedImages'
import RejectedImages from '@/components/admin/RejectedImages'
import UsersManagement from '@/components/admin/UsersManagement'
import ImageItem from '@/components/ImageItem'
import UserDetail from '@/components/admin/UserDetail'
import UploadCard from '@/components/UploadCard'
import AlbumImages from '@/components/profile/AlbumImages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      name: 'main',
      children: [{
        path: '',
        component: Home,
        name: 'home',
        children: [{
          path: '/',
          component: Popular,
          name: 'popular'
        }, {
          path: 'recents',
          component: Recents,
          name: 'recents'
        }, {
          path: 'curated',
          component: Curated,
          name: 'curated'
        }]
      }, {
        path: '/admin',
        component: Admin,
        name: 'admin',
        children: [{
          path: 'mod-queue',
          component: ModQueue,
          name: 'mod-queue'
        }, {
          path: 'accepted',
          component: AcceptedImages,
          name: 'accepted'
        }, {
          path: 'rejected',
          component: RejectedImages,
          name: 'rejected'
        }, {
          path: 'users',
          component: UsersManagement,
          name: 'users'
        }, {
          path: 'users/:userId',
          component: UserDetail,
          name: 'user-detail',
          props: true
        }]
      }, {
        path: '/profile',
        component: Profile,
        name: 'profile',
        children: [{
          path: '/',
          component: Data,
          name: 'data'
        }, {
          path: 'images',
          component: Images,
          name: 'images'
        }, {
          path: 'albums',
          component: Albums,
          name: 'albums'
        }, {
          path: 'albums/:albumId',
          component: AlbumImages,
          name: 'album-images',
          props: true
        }, {
          path: 'likes',
          component: Likes,
          name: 'likes'
        }, {
          path: 'saves',
          component: Saves,
          name: 'saves'
        }, {
          path: 'views',
          component: ViewsHistory,
          name: 'views-history'
        }]
      }, {
        path: '/upload',
        component: UploadCard,
        name: 'upload-card'
      }, {
        path: '/about',
        component: About,
        name: 'about'
      }, {
        path: '/image/:imageId',
        component: ImageItem,
        name: 'image-item',
        props: true
      }
      ]
    }
  ],
  mode: 'history'
})
