import { useState } from "react";

export function useMetadata() {
  const [description, setDescription] = useState<string>(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.

Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam, nobis soluta? Iste saepe ipsum, possimus
                      blanditiis explicabo ex odit molestiae iure perferendis
                      doloremque repudiandae debitis. Mollitia tempora quia
                      excepturi consequatur.sdgggg gg ggg g gggg ggg ggggggg ggg
                      gggggg ggg ggggg ggg gg gggg gggg g sdgsd gsgsg sggsd gs
                      gsd gs gsdg sg s gsgsg`
  );

  return { description };
}
