var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        // db.close();
    });
    dbo.collection("site").insertOne({
        title: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        by: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    }, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        //db.close();
    });
    var myobj = [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn' },
        { name: 'Google', url: 'https://www.google.com', type: 'en' },
        { name: 'Facebook', url: 'https://www.google.com', type: 'en' }
    ];
    dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        // db.close();
    });

    var whereStr = { "name": '菜鸟教程' }; // 查询条件
    dbo.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(result)));
        // console.log(JSON.stringify(result));
        // db.close();
    });
    var value = dbo.collection("site").find({ $or: [{ "name": "Google" }, { "title": "MongoDBOverview" }] }).toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(result)));
        // db.close();
    });
    whereStr = { "name": '菜鸟教程' }; // 查询条件
    var updateStr = { $set: { "url": "https://www.runoob.com" } };
    dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        //  db.close();
    });

    whereStr = { "type": 'en' }; // 查询条件
    updateStr = { $set: { "url": "https://www.runoob.com" } };
    dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        // db.close();
    });
    /*  dbo.collection("site").deleteOne(whereStr, function(err, obj) {
         if (err) throw err;
         console.log("文档删除成功");
         //  db.close();
     }); */

    whereStr = { type: "en" }; // 查询条件
    dbo.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        // db.close();
    });
    dbo.collection("site").find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        //  console.log(JSON.stringify(result));
        console.log(JSON.parse(JSON.stringify(result)));
        //  db.close();
    });
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        //  db.close();
    });
    dbo.collection("site").find().limit(5).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        //   db.close();
    });
    dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        //   db.close();
    });
    db.close();
    /* myobj = [
        { _id: 1, product_id: 154, status: 1 }
    ];
    dbo.createCollection('orders', function(err, res) {
        if (err) throw err;
        console.log("创建集合!");
        // db.close();
    });
    dbo.collection("orders").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        // db.close();
    }); */

    /* myobj = [
        { _id: 154, name: '笔记本电脑' },
        { _id: 155, name: '耳机' },
        { _id: 156, name: '台式电脑' }
    ];

    dbo.createCollection('products', function(err, res) {
        if (err) throw err;
        console.log("创建集合!");
        // db.close();
    });
    dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        // db.close();
    });
 */
    /*     dbo.collection('orders').aggregate([{
            $lookup: {
                from: 'products', //  # 右集合
                localField: 'product_id', //  # 左集合 join字段
                foreignField: '_id', //  # 右集合 join字段
                as: 'orderdetails' //  # 新生成字段（类型array）
            }
        }], function(err, res) {
            if (err) throw err;
            //  console.log(JSON.stringify(res));
            // db.close();
        }); */
    /* dbo.collection("site").drop(function(err, delOK) { // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        //  db.close();
    }); */

});
/* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");

    var dbase = db.db("test");
    dbase.createCollection('site11', function(err, res) {
        if (err) {
            throw err;
        }
        console.log("创建集合!");
        db.close();
    });
    //  db.close(); //why crash with err code topology was destroyed
}); */







/* var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("test");
    dbase.createCollection('site2', function(err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
}); */