import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="mt-20 md:mt-36">
      <div className="grid lg:grid-cols-2">
       <div>
       <Skeleton className="w-full h-[500px] lg:w-[559px] md:h-[850px] rounded-xl" />
       </div>
       <div className="grid grid-rows-11 space-y-1">
       <Skeleton className="w-full lg:w-[559px] h-[36px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[24px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[54px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[208px] mt-1 rounded-xl" />
       <Skeleton className="w-full lg:w-[559px] h-[220px] mt-1 rounded-xl" />
       </div>
      </div>
      
      <div className="grid lg:grid-cols-2 mt-4">
        <div className="grid-rows-2  space-y-2">
            <div>
            <Skeleton className="w-full lg:w-[620px] h-[220px] rounded-xl" />
            </div>
            <div>
            <Skeleton className="w-full lg:w-[620px] h-[380px] rounded-xl mt-6" />
            </div>
        </div>
        <div className="grid-rows-2 space-y-2 mt-2 lg:mt-0">
          <div>
        <Skeleton className="w-[620px] h-[455px] rounded-xl" />
          </div>
          <div className="grid grid-rows-2 md:grid-cols-2">
          <div className="space-x-2">
        <Skeleton className="w-[300px] h-[145px] rounded-xl" />
          </div>
          <div>
        <Skeleton className="w-[300px] h-[145px] rounded-xl mt-2 md:mt-0" />
          </div>
          </div>
        </div>
      </div>
      <div className="my-2 lg:col-span-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
            </div>
      </div>
      </div>
    </Container>
  );
}
 
export default Loading;
