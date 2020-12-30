import React from 'react';
import Rainbow from '../hoc/Rainbow'


const ContactUs = (props) =>{ 
//  setTimeout(()=> {
//      props.history.push('/home')
//  }, 2000);
    return (
        <div className = "container">
        <h4 className = "center">ContactUs</h4> 
        <p> Unfortunately, the world of programming doesn’t
         really fall into four cleanly separated parts. 
         Therefore, the “parts” of this book provide only a 
         coarse classification of topics. We consider it a 
         useful classification (obviously, or we wouldn’t 
         have used it), but reality has a way of escaping 
         neat classifications. For example, we need to use
        input operations far sooner than we can give a
        thorough explanation of C++ standard I/O streams
        (input/output streams). Where the set of topics 
        needed to present an idea conflicts with the 
        overall classification, we explain the minimum 
        needed for a good presentation, rather than 
        just referring to the complete explanation elsewhere.
         Rigid classifications work much better for manuals 
         than for tutorials.
</p>
        </div>
    )
}
export default Rainbow(ContactUs); 