<template lang="">
    <div class="mainQuotesSection">
         

    <div class="quotesSection" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{  infoQuotes.paragraphs.par1 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i>
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header1 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionOne" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par2 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header2 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionTwo" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par3 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header3 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionThree" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par4 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header4 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionFour" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par5 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header5 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionFive" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par6 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header6 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionSix" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par7 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header7 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionSeven" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par8 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header8 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionEight" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par9 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header9 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>

    <div class="quotesSectionNine" id="quotesHash">
        <i class="fa fa-quote-left"></i> 
        <p>{{ infoQuotes.paragraphs.par10 }}</p>
        <i class="fa fa-quote-left" id="rotateQuotes"></i> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ infoQuotes.headers.header10 }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>
    </div>



    </div>
</template>
<script>
import quotesData from '../../data/quotes.json'
export default {
    data() {
        return {
            infoQuotes : quotesData
        }
    },
}
</script>
<style lang="">
    
</style>