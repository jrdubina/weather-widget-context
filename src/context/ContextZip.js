import { useState } from 'react';
import { ZipContext } from './Context';

export const ContextZip = ({children}) => {
    const [ zipCode, setZipCode ] = useState();
   
   return(
       <ZipContext.Provider value={[ zipCode, setZipCode]}>
           {children}
       </ZipContext.Provider>
   );
};