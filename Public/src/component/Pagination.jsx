function Pagination({ totalPage, setPage, paged }) {

    const pageNumbers = []

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => setPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-white focus:border-green-700 ${paged === page ? 'bg-green-50 border-green-500 text-green-600' : ''
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                </div>
            </div>
        </>
    )

}

export default Pagination 