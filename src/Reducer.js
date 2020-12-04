import sample from"./sample.jpg"

const initialState={
    data:[]
 }
 
 const Reducer=(state=initialState,action)=>{
     switch(action.type){
         case 'SHOW_MORE':
             return{
                 ...state,
                 data:[
                     ...state.data,
                     {
                     title:'Recharge',
                     imgsrc:"sample.jpg"
                     },
                     {
                        title:'Tickets',
                        imgsrc:"sample.jpg"
                     },
                     {
                            title:'Recharge',
                            imgsrc:"sample.jpg"
                      },
                      {
                        title:'Dream11',
                        imgsrc:"sample.jpg"
                        },
                        {
                           title:'Phone',
                           imgsrc:"sample.jpg"
                        },
                        {
                               title:'Coupons',
                               imgsrc:"sample.jpg"
                         },
                         {
                            title:'Train',
                            imgsrc:"sample.jpg"
                            },
                            {
                               title:'Coupons',
                               imgsrc:"sample.jpg"
                            },
                            {
                                   title:'Payment',
                                   imgsrc:"sample.jpg"
                             },
                            {
                            title:'Recharge',
                            imgsrc:"sample.jpg"
                            },
                            {
                               title:'Payment',
                               imgsrc:"sample.jpg"
                            },
                            {
                                   title:'Recharge',
                                   imgsrc:"sample.jpg"
                             },
                             {
                                title:'Recharge',
                                imgsrc:"sample.jpg"
                                },
                                {
                                   title:'Tickets',
                                   imgsrc:"sample.jpg"
                                },
                                {
                                       title:'Recharge',
                                       imgsrc:"sample.jpg"
                                 },
                 ]
             };
         default:
             return state;    
     }
 }
 export default Reducer;