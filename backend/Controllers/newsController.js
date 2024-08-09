const axios=require('axios')
const cheerio=require('cheerio')

exports.getAllNews=async (req, res) => {
    try {
      const response = await axios('https://www.ndtv.com/latest#pfrom=home-ndtv_mainnavigation');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".news_Itm").each((index, news) => {
        const imageurl = $(news).children(".news_Itm-img").children("a").children("img").attr("src");
        const title = $(news).children(".news_Itm-cont").children("h2").text();
        const titleurl = $(news).children(".news_Itm-img").children("a").attr("href");
        const description=$(news).children(".news_Itm-cont").children("p").text();
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl , description:description});
        }
      });
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getIndiaNews=async (req, res) => {
    try {
      const response = await axios('https://www.ndtv.com/india');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".news_Itm").each((index, news) => {
        const imageurl = $(news).children(".news_Itm-img").children("a").children("img").attr("src");
        const title = $(news).children(".news_Itm-cont").children("h2").text();
        const titleurl = $(news).children(".news_Itm-img").children("a").attr("href");
        const description=$(news).children(".news_Itm-cont").children("p").text();
        if (title && titleurl && imageurl  && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl, description:description });
        }
      });
      
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getWorldNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/news/world/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();

        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
     
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getEducationNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/education/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const description=$(news).children("p").text();
        const date=$(news).children("span").text()

        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getBusinessNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/news/business/#google_vignette');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
      
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }

  exports.getScienceNews= async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/news/tags/science.html');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
    
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getHealthNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/health-and-fitness/#google_vignette');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
     
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getEntertainmentNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/entertainment/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl ,date:date, description:description});
        }
      });
     
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getSportsNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/sports/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl,date:date, description:description });
        }
      });
      
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getPoliticsNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/news/politics/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();
        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl ,date:date, description:description});
        }
      });
     
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }
  exports.getAstrologyNews=async (req, res) => {
    try {
      const response = await axios('https://www.moneycontrol.com/astrology/');
      const htmlData = response.data;
      const newsData = [];
      const $ = cheerio.load(htmlData);
      
      $(".clearfix").each((index,news)=>{
    
        const imageurl=$(news).children("a").children("img").attr("data")
        const title=$(news).children("a").attr("title")
        const titleurl=$(news).children("a").attr("href")
        const date=$(news).children("span").text()
        const description=$(news).children("p").text();

        if (title && titleurl && imageurl && description) {
          newsData.push({ title: title, titleurl: titleurl, imageurl: imageurl ,date:date, description:description});
        }
      });
     
      res.send({success:true,news:newsData});
    } catch (error) {
      console.error(error);
      res.send({success:false,message:`${error}`})
    }
  }