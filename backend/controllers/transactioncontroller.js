const Transaction = require('../models/TransactionModel')
// Get all Transactions
// @route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    console.log(req)
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }
    catch(err){
        return res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addTransaction = async (req,res, next) => {
    try{
        const {text, amount} = req.body;

        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        })
    }
    catch(err){
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val=>val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else{
            return res.send(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}
 
exports.deleteTransaction = async (req, res, next) => {
    try{
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if(!transaction){
            return res.status(404).json({success: false, error: 'No Transaction Found'})
        }
        return res.status(200).json({success: true, message: 'Transaction successfully deleted', transaction});
    }
    catch(error){
        console.log(error)
    }
}
