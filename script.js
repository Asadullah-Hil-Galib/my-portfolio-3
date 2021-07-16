

const filterContainer = document.querySelector( ".portfolio-filter" ),
    filterBtns = filterContainer.children;
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll( '.portfolio-item' ),
    everySinglePortfolioItem = portfolioItems.length;
    console.log(everySinglePortfolioItem)

    console.log(totalFilterBtn)


for ( let i = 0; i < totalFilterBtn; i++) {
    //  console.log(filterBtns[i])
    filterBtns[ i ].addEventListener( 'click', function ()
    {
        filterContainer.querySelector('.active').classList.remove('active')
        this.classList.add( 'active' );


        const filterValue = this.getAttribute( 'data-filter' );
        for ( let j = 0; j < everySinglePortfolioItem; j++ )
        {
            if ( filterValue === portfolioItems[j].getAttribute( 'data-category' ) )
            {
                portfolioItems[j].classList.remove('hide')
                portfolioItems[j].classList.add('show')
            } else
            {
                portfolioItems[j].classList.remove('show')
                portfolioItems[j].classList.add('hide')
            }

            if ( filterValue === 'all' )
            {
                portfolioItems[ j ].classList.remove( 'hide' );
                portfolioItems[ j ].classList.add( 'show' );
            }
        }
        
    })
}


let headerMenu = document.querySelector( '.responsive-menu' );
let menu = document.querySelector( '.menu' );
let closeMenu = document.querySelector( '#closeMenu' );
headerMenu.onclick = () =>
{
    menu.classList.add( 'showMenu' )
    headerMenu.classList.add('none')
}
closeMenu.onclick = () =>
{
    menu.classList.remove( 'showMenu' )
    headerMenu.classList.remove('none')
}
