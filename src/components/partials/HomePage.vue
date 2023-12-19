<template>
    
  
        <div class="backImg">
        <div class="parInput">
          <p>الفضول أحد الخصائص الدائمة والأكيدة للعقل النشيط</p>
           <div class="searchInput">
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" placeholder="ابحث عن كتاب">
           </div>
        </div>
        </div>

        <div class="textIndro">
                
                <div>
                   <hr class="hrOne"> <span class="nokta">...</span> <hr class="hrTwo">
                </div>
              <div>
                <p>
                        لا أحب الكتب لأنني زاهد في الحياة .. ولكنني أحب الكتب لأن حياة واحدة لا تكفيني.. 
                        ومهما يأكل الانسان فإنه
                         لن يأكل بأكثر من معدة واحدة، ومهما يلبس فإنه لن يلبس على غير جسد واحد
                        ، ومهما يتنقل 
                        في البلاد فإنه لن يستطيع أن يحل في مكانين. ولكنه بزاد الفكر والشعور 
                        والخيال يستطيع أن يجمع الحيوات في عمر واحد، ويستطيع أن يضاعف فكره وشعوره 
                        وخياله كما يتضاعف الشعور بالحب المتبادل، وتتضاعف الصورة بين مرآتين
                
                </p>
              </div>

              <div>
                   <hr class="hrThree"> <span class="noktaTwo">...</span> <hr class="hrFour">
              </div>

        </div>

        <navPage/>
        <div class="mainPages">
        <side-page/>
        <main-page/>
        </div>

</template>
   
<script setup>
import navPage from '../../components/HomePartials/navPage.vue'
import sidePage from '../../components/HomePartials/sidePage.vue'
import mainPage from '../../components/HomePartials/mainPage.vue'

    
</script>

<style>

</style>
    