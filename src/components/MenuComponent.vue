<template lang="en">
        <nav class="navbar navbar-expand-lg shadow navbar-dark" style="background-color: #6B24C6">
            <div class="container">
                <router-link class="navbar-brand" to="/">DevThai</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">หน้าแรก</router-link>
                    </li>

                    <li class="nav-item">
                    <router-link class="nav-link" to="/profile">ประวัติส่วนตัว</router-link>
                    </li>

                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        เกี่ยวกับเรา
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">ประวัติส่วนตัว</a></li>
                        <li><a class="dropdown-item" href="#">วิสัยทัศน์</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">ที่อยู่</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/about">ติดต่อเรา</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>