import tw from "tailwind-styled-components/dist/tailwind"

export const Container = tw.section`
w-[100vw]
h-full
relative
`

export const Layout = tw.div`
max-w-[1280px]
mx-auto
p-[25px]
flex
flex-col
justify-between
h-[90vh]
`

export const TextWrapper = tw.div``

export const Date = tw.p`
text-xs
text-gray-400
`
export const Welcome = tw.h2`
text-4xl
font-bold
my-[5px]
`

export const DashWrapper = tw.div``

export const Label = tw.h2`
text-2xl
font-bold
mb-[10px]
flex
justify-between
`

export const UsersDash = tw.div`
w-full
h-[500px]
bg-gray-200
rounded-lg
p-[25px]
flex
flex-col
gap-y-3
relative
overflow-scroll
`

export const Button = tw.button`
py-[5px]
px-[20px]
bg-slate-500
rounded-full
text-base
font-bold
text-white
hover:bg-slate-400
active:bg-slate-600
`

export const User = tw.div`
grid
grid-cols-8
w-full
bg-slate-300
justify-between
p-[10px]
rounded-lg
items-center
text-black
`
export const Id = tw.p`
text-base
font-bold
text-center
text-center
`

export const Name = tw.p`
text-base
text-center
`


export const Email = tw.p`
text-base
text-center
overflow-scroll
`
export const Role = tw.p`
text-base
text-center
`
export const Created = tw.p`
text-base
text-center
`
export const Status = tw.p`
font-bold
text-center
${(p)=> p.active === "true" ? "font-bold text-green-800":"font-bold text-red-500"}
`

export const Buttons = tw.div`
flex
gap-x-2
`

export const Edit = tw.button`
py-[5px]
bg-slate-400
px-[15px]
rounded-lg
font-bold
text-white
`
export const Delete = tw.button`
py-[5px]
bg-red-600
text-white
font-bold
px-[15px]
rounded-lg
`

export const NoData = tw.div`
w-full
h-full
flex
items-center
justify-center
font-bold
text-2xl
`

export const Headers = tw.div`
grid
grid-cols-8
p-[10px]
`

export const HeaderId = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`

export const HeaderFName = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`

export const HeaderLName = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`
export const HeaderEmail = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`
export const HeaderRole = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`
export const HeaderCreated = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`
export const HeaderStatus = tw.p`
text-center
font-bold
border-l-[1px]
border-gray-400/25
`
export const HeaderActions = tw.p`
text-center
font-bold
border-x-[1px]
border-gray-400/25
`