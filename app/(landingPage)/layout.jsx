const landingLayout = ({
children
}) =>{
return (
    <main className="h-full bg-[#111827] overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full">
            {
                children
            }

        </div>
    </main>
)
}

export default landingLayout