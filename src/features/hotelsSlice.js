

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   {
      id: 1,
      isLiked: false,
      hotelName: "Test hotel name",
      hotelImages: ["https://images.trvl-media.com/lodging/93000000/92980000/92975800/92975781/58564fda.jpg?impolicy=resizecrop&rw=1200&ra=fit","https://images.trvl-media.com/lodging/93000000/92980000/92975800/92975781/c0a56c72.jpg?impolicy=resizecrop&rw=1200&ra=fit"],
      hotelRating: 9.2,//rating from 1 to 10
      minCostPerNight: 200,
      priceOff: 20,
      paymentType: "Reserve now, pay later",
      hotelDescription: "Located in the entertainment district, Barceló Warsaw Powiśle is a great choice for a stay in Warsaw. You can grab a bite to eat at the restaurant or wind down at the end of the day with a drink from the bar/lounge. Fellow travellers say good things about the location. The property is only a short walk to public transportation: Centrum Nauki Kopernik Station is 3 minutes and Most Poniatowskiego 04 Tram Stop is 9 minutes.",
      hotelStarsCounter: 4,
      hotelRoomsArr: [
         {
            id:1,
            name:"",
            price:100,
            typeOfBed:"King bad",
            areaSize: 13,// how many sq m
            howManyLeft: 3,
         }
      ],
      hotelReviews: 10,
      meals: {
         isBreakfastIncluded: false,
         isDinnerIncluded: false,
         isLunchIncluded:false,
      },
      amenities: {
         isPoolIncluded: false,
         isParkingIncluded: false,
         isWIFIIncluded: false,
      }
   },
   {
      id: 2,
      isLiked: false,
      hotelName: "",
      hotelImages: [],
      hotelRating: 9.2,//rating from 1 to 10
      minCostPerNight: 200,
      priceOff: 0,
      paymentType: "",
      hotelDescription: "",
      hotelStarsCounter: 4,
      hotelRoomsArr: [
         {
            id:1,
            name:"",
            price:100,
            typeOfBed:"King bad",
            areaSize: 13,// how many sq m
            howManyLeft: 3,
         }
      ],
      hotelReviews: 10,
      meals: {
         isBreakfastIncluded: false,
         isDinnerIncluded: false,
         isLunchIncluded:false,
      },
      amenities: {
         isPoolIncluded: false,
         isParkingIncluded: false,
         isWIFIIncluded: false,
      }
   },
   // {
   //    id: 3,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
   // {
   //    id: 1,
   //    isLiked: false,
   //    hotelName: "",
   //    hotelImages: [""],
   //    hotelRating: 9.2,//rating from 1 to 10
   //    minCostPerNight: 200,
   //    priceOff: 0,
   //    paymentType: "",
   //    hotelDescription: "",
   //    hotelStarsCounter: 4,
   //    hotelRoomsArr: [
   //       {
   //          id:1,
   //          name:"",
   //          price:100,
   //          typeOfBed:"King bad",
   //          areaSize: 13,// how many sq m
   //          howManyLeft: 3,
   //       }
   //    ],
   //    hotelReviews: 10,
   //    meals: {
   //       isBreakfastIncluded: false,
   //       isDinnerIncluded: false,
   //       isLunchIncluded:false,
   //    },
   //    amenities: {
   //       isPoolIncluded: false,
   //       isParkingIncluded: false,
   //       isWIFIIncluded: false,
   //    }
   // },
]

export const hotelsSlice = createSlice({
   name: 'hotelsSlice',
   initialState,
   reducers: {
      changeLikedValue: (state, action) => {
         state.map(item => item.id === action.payload ? item.isLiked = !item.isLiked : item.isLiked)
      }
   }
})


export const { changeLikedValue } = hotelsSlice.actions

export default hotelsSlice.reducer