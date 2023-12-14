import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        minLength: [10, 'title must be atleast 10 characters long'],
        maxLength: [100, 'title must not be more than 100 characters long'],
    },
    description: {
        type: String,
        required: [true, 'please provide a description'],
        minLength: [20, 'title must be atleast 20 characters long'],
    },
    lectures: [
        {
            title: {
                type: String,
                required: [true, 'please provide a title'],
            },
            description: {
                type: String,
                required: [true, 'please provide a description'],
            },
            video: {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        },
    ],
    poster: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    views: {
        type: Number,
        default: 0,
    },
    numOfVideos: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: [true, 'please provide a category'],
    },
    createdBy: {
        type: String,
        required: [true, 'please provide a creator name'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const Course = mongoose.model('Course', schema);