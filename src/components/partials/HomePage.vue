<template>
    
  
        <div class="backImg">
        <div class="parInput">
          <p>الفضول أحد الخصائص الدائمة والأكيدة للعقل النشيط</p>
           <div class="searchInput">
              <span @click="search"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input v-model="searchValue" type="text" placeholder="ابحث عن كتاب" @keyup.enter="enter">
           </div>
           
           <div v-for="item in filterBook" :key="item.id" @click="goDetailPage(item)">
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
        <div class="mainReview">
        <main-page class="review"></main-page>
        <books-section @showDiv = "showDiv" @showDivTwo="showDivTwo" @showDivThree="showDivThree"
        @showDivFour="showDivFour" @showDivFive="showDivFive" @showDivSix="showDivSix"/>
        </div>
        </div>
        <div class="complete" v-show="showComplete"></div>
        <div class="complete" v-show="showCompleteTwo"></div>
        <div class="completeCre" v-show="showCompleteThree"></div>
        <div class="completeCre" v-show="showCompleteFour"></div>
        <div class="completeCre" v-show="showCompleteFive"></div>
        <div class="completeEnd" v-show="showCompleteSix"></div>


</template>
   
<script>
import navPage from '../../components/HomePartials/navPage.vue'
import mainPage from '../../components/HomePartials/mainPage.vue'
import booksSection from '../sectionsPages/booksSection.vue';



import booksData from "../../data/books.json"

export default {
        components: {navPage,mainPage,booksSection},
        data() {
                return {
                        searchValue : "",
                        booksInfo : booksData,
                        showComplete:false,
                        showCompleteTwo:false,
                        showCompleteThree:false,
                        showCompleteFour:false,
                        showCompleteFive:false,
                        showCompleteSix:false,
                }
        },
        computed:{
                filterBook(){
                        const newSearch = this.searchValue.toLowerCase().trim();
                        if(!newSearch){
                                return this.booksInfo.books
                        }else{
                                return this.booksInfo.books.filter((book) => 
                                book.title.toLowerCase().includes(newSearch))
                        }
                }
        },
        methods: {
                goDetailPage(book){
                this.$router.push({
                        name: "detailPage",
                        params: { ...book}
                                })
                        },
                search(){
                        const first = this.filterBook[0]
                        if(first){
                        this.goDetailPage(first)
                        }
                },
                enter(ev){
                   if(ev.key === "Enter"){
                        this.search()
                   }
                },
                showDiv(){
                        this.showComplete = true
                },
                showDivTwo(){
                        this.showCompleteTwo = true
                },
                showDivThree(){
                        this.showCompleteThree = true
                },
                showDivFour(){
                        this.showCompleteFour = true
                },
                showDivFive(){
                        this.showCompleteFive = true
                },
                showDivSix(){
                        this.showCompleteSix = true
                }
                },
}

</script>

<style>

</style>
