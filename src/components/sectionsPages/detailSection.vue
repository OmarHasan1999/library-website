<template lang="">
    <div class="detailSec">
        
        <div class="detailCon">
            <hr class="headerHrOne" >
            <div class="headerIcon">
                <i class="fa-brands fa-facebook-f" id="headerIconOne"></i>
                <i class="fa-brands fa-twitter" id="headerIconTwo"></i>
            </div>
            <hr class="headerHrTwo">
            <hr class="headerHrThree">
            <div class="headerBook">
                <div><p>{{ $route.params.title }}</p><span> / </span><p>{{ $route.params.cat }}</p> <span> / </span> <p><router-link to="/" class="homeBack">الرئيسية</router-link></p></div>
            </div>
            <h3>تحميل كتاب {{ $route.params.title }}</h3><br>
            <hr class="oneHrDetail">
            <hr class="hrDetail">
            <div class="detail">
                 <div class="detailBook">
                    <div class="one"> <b class="year">سنة الاصدار</b> <span>:</span> <strong>{{ $route.params.year }}</strong><i class="fa fa-calendar-days"></i></div>
                    <div class="one"><b class="pageNum">عدد الصفحات</b> <span>:</span> <strong>{{ $route.params.pageNum }}</strong><i class="fa-solid fa-file-lines"></i></div>
                    <div class="one"><b class="fileSize">حجم الملف</b> <span>:</span> <strong>{{ $route.params.size }}</strong><i class="fa-solid fa-file" id="file"></i></div>
                    <div class="one"><b class="cat">الفئة</b><span class="twoPo">:   </span>    <strong class="str">{{ $route.params.cat }}</strong><i class="fa-solid fa-list" id="cat"></i></div>
                      
                </div>
                <div class="imgDetail">
                <img :src="$route.params.img">
                <div class="buttonDetail" @click="downloadFile">
                    <button>تحميل<span><i class="fa-solid fa-download"></i></span></button><br><br>
                    <a ref="link" style="display:none"></a>
                </div>

                </div>
                <div class="shareBook">
                    <p>: شارك الكتاب</p>
                    <div class="newLinks"><i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-twitter"></i><i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-solid fa-share-nodes"></i></div>
                </div>
            </div>

            <div class="bookDesc">
                   <hr class="hrDescOne">
                   <h6>لمحة عن الكتاب</h6><br><br>
                   <hr class="hrDescOne"><br><br>
                   <p>{{ $route.params.overView }}</p>
            </div>

            
        </div>
        
        
    </div>
    <p class="Rights"><span>2023 © </span>CoffeeBook ..جميع الحقوق محفوظة </p>
</template>


<script>
import allFile from "../../js/download"

export default {
props:
['title','img','pageNum','year','size','cat','file','overView'],

methods: {
    downloadFile() {
      const filePath = allFile[this.file]

      const link = this.$refs.link
      link.href = filePath;
      link.download = this.$route.params.title;
      link.click();
    },
    
  },
 

}
</script>
<style lang="">
    
</style>