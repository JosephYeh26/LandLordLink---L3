import React from 'react';
import { GoArrowRight, GoBook, GoCrossReference, GoClock } from "react-icons/go";

interface BlogArticleProps {
    title: string;
    content: string;
    date: string;
    author: string;
}

const Blog: React.FC<BlogArticleProps> = ({ title, content, date, author }) => {
    return (
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-12 gap-4 tail-flex">
            <div className='col-span-8 flex justify-center tail-w'>
                <div>
                    <div className='mx-auto flex  items-center'>
                        Home <GoArrowRight className='ml-3' /> Blog <GoArrowRight className='mx-2' /> Real Estate Financing  <GoArrowRight className='mx-2' /> Creative Financing
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-gray-700 text-lg font-bold'>Free Money? Can you build a Real Estate Portfolio with Zero-Internet Credit Cards?</h1>
                        <div className='flex items-center mt-4 text-gray-600'>
                            <GoBook /> <span className='mx-3'> 8 minutes ago</span>
                            <GoCrossReference /><span className='ml-1'>1</span>
                            <GoClock className='ml-3' /><span className='ml-1'>5 min read</span>
                            <GoCrossReference className='ml-3' /><span className='ml-1'>Share</span>
                        </div>
                        <img className='h-60 w-full mt-4' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAECBQEFBAcGBQQCAwAAAAECAwAEERIhMQUTIkFRMkJhcRQjUoGRofAGYnKxweEVM4LR8SQ0Q5Ki4hZTY//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAwACAgMBAQAAAAAAAAABAhESAyETUTFBYRQE/9oADAMBAAIRAxEAPwD6pDggjtt5BBBDpDa6pQQ4AIbOaUEOkENmiggggmhChwQNFBBBBNCCHCIgaKCkFIcAoIIIAggggCCCCKFBDggiUEEEYd9QQ4UEDYhwocDYgggglEKCCCCCkEEVBBBBA0IIIIGhCh1hQNCCCCCaEKHGxtKbLVJ4YiyMUEWPt7pdv/WK4bLBBBBFTSUEKCsctvXxP2cOI1grE3TjFKCI1h1h1T48TpDpEawVh1T48UrYVsKsFYdUuGJ0hUgrBWNbrFwgggrChtLicKCCLtmwQQQobTQggghs0I6LA4I50SDqrLUq4YVYtnFJW7w93EZ4IIqX8iCCCG000KKVxAoiAXEguPN7j6NxlIiFSLAqCv4YvdYviiuCJkp9mFVPsxe0+HJGCJ8PswcMXuJ8WSFYUTITCt+9DrFL484jBE7fvQrIvUTjJGsEO2C2HUZ5v0VYIKQUi7hcaIUFIKQ3E5oggpBF2nNEEEKG05pwQqwRdpyIIVYIbNFWCsQhxy9vVvFOsO6K4cF9LL1QXxXBBfX2uC4LkxkfmWpdFzjn9Op+EcaZ28+0vebi5hNSpCU8VAafGo08/OEwtZy8uOP5r0kOkYJafamOFpXFbW3FaaVxGi9UZsrpLLF9YVVRTvIN5E0q6sK6Kt7BvIC6sK6K95EVPpT2lJT/AFRYl/q26C6OYra13+0a3nFTiqM1pp0PWLpadUvhmUpbdtHDdUV6Axri/tznkxt023Qr4jWCsZa1UroV0KFWKlSugrEYVYJpKsERrBA1/FVYd0YzPMWXJuV+FP8AfEYH9tub1TctIqctpctSwAiornmeWBnMdeLXG+XGft27o420J6bmt+3s1X+37SkqFXFgiqQdANR5/PDtLaL7supTUz6PckBKlKKbK4r5iOT6TtSXWmRkX5VKWU1TbneI5GpBqadBQknOI3MPtxz8+/WL0UrtpW9U2+4lXBei2gvpgg9CDjWMr+1pmY3quJLSkqtQlNKJFak5yceUcKTO3ULUl+1NqqpQ4m3eqUMUOSDWvKlfdFjknMtTDTzClJfSpS0pUpSU0JIyMgkVI8Qeka5kcvkybdouK9HampGZcU1aEI3Sag5ANRrUEAddcRbstl2add/irCm0uUWn1uAQBUAVwa1NRrmHMtKRJKmN3vGnFAp47QhPUYIFK18ov2O5Kete3inHXMLSlqlhFSQaanOp1x76z7dOWlmJeUaS07c62kC9VCo0FK5IAJprSHOTk7Ly/wDpmkzDqVDhVio56c8fOMru77KW03KwhLihQqOgJMZ9nPKlZdpmZU2lXDYpLtxqa4OlaEEA6GkY4jpjnlG+R2yqaQm6UcZd7yXEqoDg0JpjURsTN2rtfSlP3kqr8tYxuKmUW8V3tJ0/WCnH63u04k/DPhmHEa+bN1QtK+ypMRW62jtKT9eEcx1TaFxk9K3q92n9PrrE+KN3/prfObVlmkNbpSVKeVRPQUrUnpocHnGKYfuubacuU52lXVJ8MeBjIpCb1d5KqW21BBzU1B5xlQj0ebYSpj1TaD2U9jproKV06COmPjmLjn5ss/y9BIp3VrKlJVM2A7tXTqaCMk/IONTqtoSjjzilduWuFvKpApg4B1zSLpeaYdX6UpPEmrd1xpSoOnPkQYhO7WbaadUlO8VbwoTgk9K/CM8206kixraDi7VNWpSpNbHPAZ0OM+flmOkw/vUXJ/qT0McFMipq6Ya4X7iuy6qQSc0GB9GJNWysul6Zm1XJ7S26JQQaUJAqAKU1MZywldfH58sXoKwVjmSE6+hFs93qlC00Ip0JH5+Bjo3xxuNj14+WZe4ldCrEboLommukroIhWCGjpwHJP0eXYUl1tlSVcaHFFSXE8yCMjSo91ecaC0pEw/clW63F97fCCo8hU5wNfERqnAlbTqt2lxSUG25IPSoFM5pyjkT87tD0dhlSWXN8oXqZqmiTqACak05jroKR6vb5npi2ZdMf7m5L7ai26jBSa8NTrUcq1p+nRk9ny2zVqU02ne54sgIJySK1py11ivZyJbZsolP8m5SLk87qVIJ55JiG0No3b1Mo+zv8rtUsACgyT1oKfL3aZUTTHpU60qWUlmZcuKnblKwKAgAECuRnNK+MdwSu99S/u1cI7ulAAaHx198fNNsbV9HkmpiU2tO715CnFqtCVFQKABg8CCKmgOQB0ju7IfmZeYfmt7MNpmKIRv1KoGwAsuVODQEAa1JGQQaRa9fNP+qU3a2q1QCkqzgjpXP+YwSDrDW0EyKm25d1SL7E5QBoMcs6A/rHJmdsK9H3kslx7d2BTqkmoqKgmg1I8KCvKNGzn317P9I2o2lxV4WylSAXBSgJoBrWppyoM00aT8e3YTMKad4lW6BXFUDoa6k/2iuecTNISl9KVWqvSq3II0I6RlSlUwvvXJ9/vzj4YjLMbQlpeYVL7zePtpBdTruwdKnlUkCnjWlI3MWLllXR9Lc7va+MRl5lV6rv+TtKTg+dRFbIc9HumW0pfVXgvrp4+OscSYnXL0spfbZVebkpuJWADdQ0xQnHu0qIXTMuT1SEscX4iFeBiuYYVulbj2ez5dI5OztqKmnWE+rS09VHCslVwBUBUDoCag4NPONE1tb0CUTOTNzkm5lK20kkAjHga4z79DjP4b/K9tty9LjqUpSrz8eXwx4xKbKVLT97u9REW9oyk1dunE3JSCq7hIBrQkGlBjWK1qbW6lu5O97qcdnwp4Uiwq11d6IxBqxaVK7qq/DT50+Ea6/8bX14RYltKUXK/pjW2P2zSzln+oU5/MWChOvOhoB1qfP3xfJPqdddSpTMuxcQhKUm5eAagg0GnT9/OOOTchO2sJb3FiQveKJFdTQ61FTTQGvKO23u0y6XFWuKVnwjPLcz02PKaTL2uuJe4FBNyhU10FKZ1ppyEUyU05JNMS78ypWiLnEpBJ8hgdKDpWItKa9H9M/mKUmqVJTU0rQAe+KmLXZtPqFXYXe4oiwGhwAdcD3iM3GNTPKOymYfQ6lt1LauI/y6g8qYOvx5iL0vJvtu4vZ5xQlaezxfXjCebvaVukpuzalWBXzjnzHeeez+kvaEilagueaSoHKbtD0gjmjZClAKU5MoJyUhQIT4aQQ4i/6L9Ivbd2WxLtTEztSXS29/KVeLV+R56j4xl2ntv0eXSqRtmHXFUaVeAgE1FSo4AwcVqdBHy6ZnFK2emV/h7bjDddzvHVrKBoQaEClRWlBoNY78ptfb7UkpU8/6OxaEItZSkA0AAFATggEinM+AjtHmuLaNiTe0tpb77QPtszN9qGnFJIW3QhQTQ1BICiDS0AnXlonNlS06h2X+z6d2ltSWFKvKag5WKk0IpQ0xUknnWPNSs0mVdfedfTMKepxTayVI4CSAkAmhKyNU1ppCa+0SmpdTapRty6h3Tfq0N0FNEgUPQkk4HSIr1SPsMwhEn/EJtu1lKgtDaKXpJJAqTywNNBHpdqolp+UVLuubu5JHDggVFcdI+cf/ADabaaVLuyyVJtsuuKXUagm4c6EUNBSME/tzaE7LpVNzKVbtQCZNKTnhNVLIpWtNK89BF9JrL9vYS8yqXafeS42qWS6htD9pUi0USkNoqAtfInAFaCtCBoX6XMNekTyvQNmKQpx25Y9IXQi0qJpTNTQYAoKco8cjak21MejzKUzj8vLluXUlICW1GlCEgUJHUCunSPZz2ypmYlGmdpP+q9WuY4wAhKEC4DTtEk9BnrSBr7bNtbYVJbPaZ2awpyZmEgtWprRugNx6anBp5YMeW/imzdiySVejJe2g5vC9vEquKie8TWgoPfggUiraEyqd2rMvSMy5uHkjtJALorRKU/dxqRgAmMW1y3K7ptKkuXca3VI43DUgUqNAMDFK5ziA9Q9t9uS2Y7MK2kmYmXLHlXKuCKnKEgAV0OuRisece2w7ML3bG73swlQdmX1ZCaVHOiBTkCdOsca1t13itbaT2UprwZOADrnnFJZfn1pZatbYSo3cWK6kknU48NILMXfb+1ypKSaTLSyUzlqrJlVSAkigIBGSM+AqfGNTX2/T6O0y7JcSaWrvKsVFa0trj4mPI7XfS6pKWEqS02gBKVKrTFDpgEnNPHzjALoy3MY7r21VTG2FTzcy4y6pZXe1gIGoAGajqDWvOPRbO+2TUwj0Hbyd2m+npkoqihqAaZ06g+Xj4NDvejQ2UrR9aQLH0mR+1LMs8lnaE229LVCGpxFor4rSCaCppXA5kAZj1Clt2JUly67KVXVFOUfEZedflUOtptcYcSQtp1NyadR0PiKGOrsL7TTOxVWtJVMSaqeocVls47BzTn5+EWMXD6fSpqSamF7xxNqscV1KgGv6mJTDdko6lhKUqSg2JTQCtMYijZO1pLasvvpRy7QqQrtIwBQjl56axqU3veK1NsdPVcPccTY7O0JVat65/plJ/lOKrQ64pG/YLz6Jh1t1hLbFoLWgwDSgA5UoY2htN9vahveq7VqfZtz+UNLtu9NT2bYimdUhfCmOSA5dcpVrWPM9fdyina+1kyDVqU3Oq7KU0qT4Dn5CJqHVekE8kgVBHhvII8IJ5yg305s5DnfStxNUnmDnWCM8xvrJ4FLz6V2qUlXCEcSAoU5VHOhNc8xE2nEr9W669utVWq50INANK6e+MVVXxehxS0W8KU57Kc/VREdjq00tTn8vh4U3BRqfd/aKlTCrLUptT+cQUmzi7Wvap5QIPBburlXDiVXTPKvl8BAaww/NIU4r1bCcpUmtMmhNTUk1JJJ8Yg+0/KzCpdL6VKSutzaq5015fvEFOvuo3fd9lOM5yfiYglKkWwHtvstsxUg67PTd1yU8FqAocwKGhqcYHkYy/aXaU7P8MylTLFtUMKVmuDVedTQ64FMdTlX9o5tcuwyxLS7O5TRDqklaxjUVqBz0EcaemXJh1Tky6p51VApTmSQAAMnyEGJLb7deWfVL7/epb4sJfcWUBBrWlBrmtdcdI4z885MO7xSlOOqxdz6ADoPARU21etKe995Qp4AeMe0+zCZKQad2s/clLKCELwE3kggCpqTr4UHStS2acCQSlqYlk7Qbcl2HKXrcVQFFK4oDnz6ctR6Seafa2FalhMpLJY3yEqaN6yaihXXrQnHPwFeNtxz+JLVOTL6lP3eq3aiUigOBoDmpx7UbPSdobX2Y1MPtpuUlQQptRFSCAcA5NMf1GCPLTzKkOpUpLnEntK8tPPPPlSKQpPZT2e6q2lB4x3NqLvWpKt3dcnsp7ZzU+AINcY0jjvsq3tvFamvu1J+dT74jcrME9rh/FCSqxcNRUi6LWEMTHCpxLKkp/wCS6hNfAEjWvuhVO/eo+9EDwLhOo3S7bkq4Qbk6ZANPMae6GF+1CC6XmHJd1LzDimXU9laVfVR4R7r7P/a9qatk9tv+ju6B9OEueeKA/I+GkfP6ezEket4YsumbjK+r7V2omSXcxM7xSlKtYwSagUANAKDUnoT0jAvbDEkvebSnbnVIJsbUKIrU6HnoEinLxMeHlJ/aEqi1qbtTpyNAAaCp0HhpWMy297cpXEpSSVKVzJINYvX0z8b1Dn22fQj/AEjG8UpRHrVEgAUoR551jz09tPaE6vePv9pIttTTIyDXkfEGKDwLSni7MRt7ynE8P3gPEY0584xba3MMYo3IOTqdeKCNKW1WjhVpBEadjcS3qkyiUqVbW9WtaCtQffiJp2Klq1yeUrdYKktpFV1NCAT4Z05iOafvJ/DpGkzszMcLr7jiUppcr2RXGfGsbc9VMSslunbpRze9xV/CNK1xXr8olOS+z5dFss56Q6pP8y0gN+AANK6eEUKecXwtXW95SlE+4eENBSi3s8OVKt08upirGVTX/X6zEkpaT3rlY7uPnF6y06hKv5afaVWpPM/WIaJZpbSnlK4chKcE1FNQDgZOfAxBmcdSr/2iiYdShHq0/wDjjP7RpS1ch1VqvVqA65Ogr1OfhEFtpaadTdcr45BGR05fOAwUTwqUrxUm3kP2jqzkx6U00rfuJaZapZ0TkH30I65JjlWf+Sa8otbmHN0ltPdT9fHERXdEqlcolUzM2qbaSWlKUCkVpgZ9mhoBWop0j0ez0ML+yjDj77aUyqihDTKgo1Vqo4qDmtB05GPCJfd3W7tSlKcp4dNKA9P8xp2PMKQu1KuJVB+/11HSKljdtpW9Xc1xKzxaG2lBSmPA45CnOMaDfKXO9pS6q00r1p1r8onNvJQ7xKutUQrlXMZluKdauu7yvhWvvyT8YEYpgKv7X1iINJvX2YuU3f8AXOEltNlylfR5eHKJWjea4Lv2OkUbtSOJXZu98ayOO3i/66dPmIlYlCEpUpX4vG6mOgiCtDTViVcX3v8AEWNtd3h5XJ8SP3gWE9n7wu4uWp89PlEN5Yi7zPwiKuATw3d6nClPUE/oYrUtpppSld1QuSr39fIdYxyT/GpKuK5R7NeXMY8YlNuKXKO8PeAuzz1Jppy1hs0nNuqa4bk8uz5V/WKpl5Xoqle1gY9+nT+0YnHFcNyruGLHF3otV7Q4unvjO2+Vn8Qs4E7whOAaawRQbiTdlXMwQ2cvQBu9fsp/b/MMhNlvdiBSlHEpXDg9r4++Grj/AA91P946uJFfa9n60iKU953iSnu9TQUiQacUjfJSq28ITamuuv6QOtuNI9a3alVLYKg6qzs93uxJD1supu3hur40H18oqJVCrd93/GvxEBoQ6lDXa71VJ6nSsZnjwdnr9GIFXs9n60iSkXo4f8QGUpjY1PJal1MtMJuVbxq5AAggDTXNYyng7Se6fyNIqCvryiVpoLyrFXW8VPOg6Q2XLXUqTw62+cVAK4foxoQypHaVbw8PhzB/KJs0k6u/h7Vvs8tM186RFtarEs+znh551r7hFqkJv9rhP50+VIaSn2e93fMddP2giKWFWXK4U469PzhqtQhN1yv7Zp8DEC5ejhV2cJ1wNPzMReWni9r8RxkikRU1Pdq3h1+edPd8og4uzi/cCIOOpQhKre1+da/lGRx1W6UlNyv6dABEWT21tL3q0uK87cdD84odfTZ61TnMWp015k9KafRhLqtaVa7wpr3QD059ajnGdsJW1bwp/F+QI/WJa1IEKSl27/rby+caJg3tXKSq3u21yetTj4RnUhN/dSn306Y6xKZLd/Ddd3rqdMAUwAOkRrSpQsX9fpArjt4YEntdn+rX9oFD6090FW3u/wD2U8LocQ3av/1EEB2SLUJ4uL6AEer2Jspn0JE5NobcUXAhlpVaLcJtCajTNcnGawQR3jy5+nfldlSWyJJ+a2gwltKkgbvtgKzUg5PPU5xHgNpzo2lNk9lKEgISkUCUg4A+MKCLWcLtmUiyiU89P3itfbuggjLbO/dfb3eUbdn7QXLyzrSkJUy4SpQtFSQkgZ1oCa0ggiNM1N9omqrTdVWuTpjGLR8YsLDaO2SpX70hQRlTJLSyqltlK2+Zr5wy5wWpVxKVxY10gggEpYrYrt/XOkRcrxJaVam0H4Y/WCCBGaZeDKEqbPa8PMRcpVyN57VOL2RQcufOCCDTI+5/q7lJ7PdTjNOvuiXClpSxclKseZx44pmCCMtIlYSioNqO9bXPhTHhFBK1JrThHdxQVOkEEKsStSuqlcLQ14QM0ryrX4RBYWm27vJ8PrpBBGRAe1E2wp61KLbhonQn30pBBBUb/wAPwggggP/Z"></img>
                        <article className='mt-2'>
                            However, it's worth noting that while using inline classes can be convenient, it may lead to less maintainable code in the long term, especially for larger projects. Tailwind encourages the use of its utility-first approach along with CSS extraction for production builds, which extracts the utility classes used in your HTML into a separate CSS file, optimizing the final build size and maintaining scalability and maintainability.
                        </article>
                    </div>
                </div>
            </div>
            <div className='col-span-4 flex mx-auto'>
                <div>
                    <div className="flex justify-between items-center">
                        <img alt="avatar" style={{ borderRadius: '100px', width: '50px', height: '50px' }} className='rounded-lg ' src="https://placekitten.com/200/300"></img>
                        <div className='ml-2'>
                            <span className='text-blue-400'>Jeff Minosia</span>
                            <h3>Fake Data ablabla</h3>
                            <h3>Fake Data </h3>
                        </div>
                        <div className='text-red-600'>Blog Author</div>
                    </div>
                    <div>
                        However, it's worth noting that while using inline classes can be convenient, it may lead to less maintainable code in the long term, especially for larger projects.
                        <span className='text-blue-400 ml-3'>
                            View Detail
                        </span>
                    </div>

                    <div>
                      <img className='h-80 w-full mt-4' src="data:image/jpeg;base64,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"></img>
                        
                </div>
                </div>

            </div>


        </div>
    );
}

export default Blog;