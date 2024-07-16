import { Button, Input } from '@material-tailwind/react';
import React, { useRef } from 'react'

const Ref = () => {
  const eleRef = useRef();

  const some = () => {

    eleRef.current.scrollIntoView({
      behavior: 'smooth'
    });
    console.log(eleRef.current);
  }
  console.log('render');


  return (
    <div>
      <Input label='hello' />


      <Button onClick={some}>Click</Button>
      <h1>hello 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo ratione velit ipsa. Eius dicta magnam porro, adipisci explicabo cumque autem perspiciatis accusamus corrupti suscipit fuga fugiat tempora molestiae, obcaecati temporibus repellat exercitationem consequatur sint ipsum quibusdam dolorem deserunt ea. Et, nostrum. Deleniti doloremque dolor numquam facere laboriosam quas nobis praesentium sed? Vitae id itaque magnam nulla quo error sunt velit similique aliquam at deleniti, ea voluptatem optio sequi, distinctio accusamus, quia praesentium odio obcaecati. Quod mollitia illo impedit ipsam iste nesciunt optio, accusamus, qui delectus eius explicabo voluptates saepe sequi nisi? Nesciunt dolore odit dolor dicta optio rerum laborum magni, maiores perferendis quasi quae consequatur suscipit non ratione pariatur sapiente rem vero consequuntur explicabo, velit cum nulla mollitia enim. Suscipit impedit, ad atque possimus fuga praesentium laudantium similique. Quis ea explicabo fugiat ut, earum animi laborum modi, facilis ipsa consectetur itaque quod impedit. Dolor, porro quam laboriosam deserunt dicta ad, accusamus quidem perspiciatis quia provident blanditiis vitae magni. Doloribus consequatur voluptas ullam fuga iste neque ratione ipsa praesentium aliquid qui. At illum iusto amet in, possimus nemo maiores sit esse eos atque et, consectetur consequuntur commodi repellendus non? Sunt dolore tenetur cum aperiam nihil alias debitis id, maiores enim.</p>


      <h1>hello 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo ratione velit ipsa. Eius dicta magnam porro, adipisci explicabo cumque autem perspiciatis accusamus corrupti suscipit fuga fugiat tempora molestiae, obcaecati temporibus repellat exercitationem consequatur sint ipsum quibusdam dolorem deserunt ea. Et, nostrum. Deleniti doloremque dolor numquam facere laboriosam quas nobis praesentium sed? Vitae id itaque magnam nulla quo error sunt velit similique aliquam at deleniti, ea voluptatem optio sequi, distinctio accusamus, quia praesentium odio obcaecati. Quod mollitia illo impedit ipsam iste nesciunt optio, accusamus, qui delectus eius explicabo voluptates saepe sequi nisi? Nesciunt dolore odit dolor dicta optio rerum laborum magni, maiores perferendis quasi quae consequatur suscipit non ratione pariatur sapiente rem vero consequuntur explicabo, velit cum nulla mollitia enim. Suscipit impedit, ad atque possimus fuga praesentium laudantium similique. Quis ea explicabo fugiat ut, earum animi laborum modi, facilis ipsa consectetur itaque quod impedit. Dolor, porro quam laboriosam deserunt dicta ad, accusamus quidem perspiciatis quia provident blanditiis vitae magni. Doloribus consequatur voluptas ullam fuga iste neque ratione ipsa praesentium aliquid qui. At illum iusto amet in, possimus nemo maiores sit esse eos atque et, consectetur consequuntur commodi repellendus non? Sunt dolore tenetur cum aperiam nihil alias debitis id, maiores enim.</p>


      <h1 ref={eleRef}>hello 3</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo ratione velit ipsa. Eius dicta magnam porro, adipisci explicabo cumque autem perspiciatis accusamus corrupti suscipit fuga fugiat tempora molestiae, obcaecati temporibus repellat exercitationem consequatur sint ipsum quibusdam dolorem deserunt ea. Et, nostrum. Deleniti doloremque dolor numquam facere laboriosam quas nobis praesentium sed? Vitae id itaque magnam nulla quo error sunt velit similique aliquam at deleniti, ea voluptatem optio sequi, distinctio accusamus, quia praesentium odio obcaecati. Quod mollitia illo impedit ipsam iste nesciunt optio, accusamus, qui delectus eius explicabo voluptates saepe sequi nisi? Nesciunt dolore odit dolor dicta optio rerum laborum magni, maiores perferendis quasi quae consequatur suscipit non ratione pariatur sapiente rem vero consequuntur explicabo, velit cum nulla mollitia enim. Suscipit impedit, ad atque possimus fuga praesentium laudantium similique. Quis ea explicabo fugiat ut, earum animi laborum modi, facilis ipsa consectetur itaque quod impedit. Dolor, porro quam laboriosam deserunt dicta ad, accusamus quidem perspiciatis quia provident blanditiis vitae magni. Doloribus consequatur voluptas ullam fuga iste neque ratione ipsa praesentium aliquid qui. At illum iusto amet in, possimus nemo maiores sit esse eos atque et, consectetur consequuntur commodi repellendus non? Sunt dolore tenetur cum aperiam nihil alias debitis id, maiores enim.</p>



    </div>
  )
}

export default Ref