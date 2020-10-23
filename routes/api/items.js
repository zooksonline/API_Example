const express = require("express")
const router = express.Router()
const config = require("config")

//  เพิ่มรายการ
router.post("/add",(req,res)=>{
    // สร้าง function
    const itemAdd = async()=>{
        // DB Config
        const mongoose = require("mongoose")
        const db = config.get("mongoItems")

        // Connect Mongo
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(()=>{
            const Item = require("../../models/Item")
            const {ID, Name, Price} = req.body
            const newItem = new Item({
             no_id:ID,
             item_name:Name,
             item_price:Price   
            })
            newItem.save()
            .then((logAdd)=> res.json(logAdd))
        })
        .catch((err)=> console.log(err))
    }
    // ใช้ function
    itemAdd()
})

// ดูรายการทั้งหมด
router.get("/",(req,res)=>{
    const itemAll = async()=>{
        // DB Config
        const mongoose = require("mongoose")
        const db = config.get("mongoItems")

        // Connect Mongo
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(()=>{
            const Item = require("../../models/Item")
            Item.find().then((logGet) => res.json(logGet))
        })
        .catch((err)=> console.log(err))        
    }
    itemAll()
})

// ดูเฉพาะรายการที่ต้องการ
router.get("/id",(req,res)=>{
    const item = async()=>{
        // DB Config
        const mongoose = require("mongoose")
        const db = config.get("mongoItems")

        // Connect Mongo
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(()=>{
            const Item = require("../../models/Item")
            const {ID} = req.body
            Item.findOne(
                {no_id:ID}
            ).then((logGetone) => res.json(logGetone))
        })
        .catch((err)=> console.log(err))        
    }
    item()
})

// ลบรายการ
router.delete("/delete",(req,res)=>{
    const itemDelete = async()=>{
        // DB Config
        const mongoose = require("mongoose")
        const db = config.get("mongoItems")

        // Connect Mongo
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(()=>{
            const Item = require("../../models/Item")
            const {ID} = req.body
            mongoose.set("useFindAndModify", false);
            Item.findOneAndRemove({no_id:ID})
            .then((logDelete)=> res.json(logDelete))
        })
        .catch((err)=> console.log(err))
    }
    itemDelete()
})

// แก้รายการ
router.put("/update",(req,res)=>{
    const itemUpdate = async()=>{
        // DB Config
        const mongoose = require("mongoose")
        const db = config.get("mongoItems")

        // Connect Mongo
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(()=>{
            const Item = require("../../models/Item")
            const {ID, Name} = req.body
            mongoose.set("useFindAndModify", false);
            Item.findOneAndUpdate({no_id:ID},{item_name:Name},{new:true})
            .then((logUpdate)=> res.json(logUpdate))
        })
        .catch((err)=> console.log(err))
    }
    itemUpdate()
})



module.exports = router;