

function Footer(){

return(
<footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-100">
    <span class="text-sm text-black sm:text-center dark:text-black">© 2022 ShellHacks, Some Rights Deserved
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-black dark:text-black sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/gustavo-contreras-b009511ab/"
 class="mr-4 hover:underline md:mr-6" target="_blank">Connect With Me</a>
        </li>
        <li>
            <a href="mailto: ContrerasNefiodow@Gmail.com" target="_blank"class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
        <li>
            <a href="https://forms.gle/2nrMZ3X1qnd5pBZQ6" target="_blank"class="mr-4 hover:underline md:mr-6">Review</a>
        </li>
        <li>
        </li>
        <img
                        className="h-8 w-8 rounded-full"
                        id='shell'
                        src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/667/934/datas/large.png"
                        alt=""
                      />
    </ul>
</footer>)
}

export default Footer;