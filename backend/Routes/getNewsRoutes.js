const express=require('express')
const newsRouter=express.Router();
const newsController=require('../Controllers/newsController')

// ROUTES FOR FETCHING NEWS ON DIFFERENT CATEGORIES

newsRouter.get('/all',newsController.getAllNews)
newsRouter.get('/india',newsController.getIndiaNews)
newsRouter.get('/world',newsController.getWorldNews)
newsRouter.get('/education',newsController.getEducationNews)
newsRouter.get('/business',newsController.getBusinessNews)
newsRouter.get('/science',newsController.getScienceNews)
newsRouter.get('/health',newsController.getHealthNews)
newsRouter.get('/entertainment',newsController.getEntertainmentNews)
newsRouter.get('/sports',newsController.getSportsNews)
newsRouter.get('/politics',newsController.getPoliticsNews)
newsRouter.get('/astrology',newsController.getAstrologyNews)

exports.router=newsRouter