export const Large = ({ children }) => {
    return (
        <div className="w-96 h-[26rem] p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72">{children}</p>
</div>
    )
}
export const Medium = ({ children }) => {
    return (
        <div className="w-96 h-[13rem] p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72">{children}</p>
</div>
    )
}
export const Small = ({ children }) => {
    return (
        <div className="w-96 h-[9rem] p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72">{children}</p>
</div>
    )
}
export const Heading = ({ children }) => {
    return (
        <div className="w-[98%] h-[8rem] p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72">{children}</p>
</div>
    )
}

export const GridCard = ({ children }) => {
    return (
        <div className="w-96 h-max p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72">{children}</p>
</div>
    )
}