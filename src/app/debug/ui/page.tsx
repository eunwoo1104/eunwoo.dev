"use client";

import { useContext, useState } from "react";

import type { MessageBoxProps } from "@/components/MessageBox";
import { MessageBox } from "@/components/MessageBox";
import { GlobalMessageContext } from "@/utils/contexts";
import { icons } from "@/utils/icons";

export default function UITest() {
  const [boxType, setBoxType] = useState<"info" | "success" | "warn" | "error">(
    "info",
  );
  const globalMsgCtx = useContext(GlobalMessageContext);

  const createNewGlobalMsg = ({ title, type }: MessageBoxProps) => {
    globalMsgCtx?.addMessage({
      title: title,
      type: type,
      icon: icons.circleCheck,
    });
  };

  return (
    <div>
      <h1 className="font-bold text-4xl">UI Testing area</h1>
      <div className="my-4 h-[1px] w-full bg-neutral-700" />
      <p>Example text</p>
      <MessageBox
        type={boxType}
        title="Test Message Box"
        className="my-3 hover:cursor-pointer"
        onClick={() =>
          setBoxType(
            boxType === "info"
              ? "success"
              : boxType === "success"
                ? "warn"
                : boxType === "warn"
                  ? "error"
                  : "info",
          )
        }
      >
        <p>Click to change type (current: {boxType})</p>
      </MessageBox>
      <button
        className="clickable level-2-bg rounded-lg p-2"
        onClick={() =>
          createNewGlobalMsg({
            title: "Test global message",
            type: "info",
          })
        }
      >
        Click to open global message box
      </button>
      <button
        className="clickable level-2-bg rounded-lg p-2"
        onClick={() =>
          createNewGlobalMsg({
            title: "테스트 전역 메시지",
            type: "warn",
          })
        }
      >
        클릭해서 글로벌 메시지 생성하기
      </button>
      <div className="my-4 h-[1px] w-full bg-neutral-700" />
      <h2 className="font-bold text-3xl">MessageBox Color Palette</h2>
      <p className="font-light text-neutral-400">
        Imported from SamNet source code
      </p>
      <MessageBox
        type="info"
        title="Info: bg-cornflowerblue [#6495ED]"
        className="my-1"
      >
        <p>text-blue-900 dark:text-blue-50</p>
      </MessageBox>
      <MessageBox
        type="success"
        title="Success: bg-green-400"
        className="my-1 bg-green-400"
      >
        <p>text-green-900 dark:text-green-50</p>
      </MessageBox>
      <MessageBox type="warn" title="Warn: bg-orange-300" className="my-1">
        <p>text-orange-900 dark:text-orange-50</p>
      </MessageBox>
      <MessageBox
        type="error"
        title="Error: bg-lightcoral [#F08080]"
        className="my-1"
      >
        <p>text-red-900 dark:text-red-50</p>
      </MessageBox>
      <h1 className="font-bold text-2xl">Extra Color Palette</h1>
      <MessageBox
        type="none"
        title="bg-blue-300"
        className="my-1 bg-blue-300"
      />
      <MessageBox
        type="none"
        title="bg-blue-400"
        className="my-1 bg-blue-400"
      />
      <MessageBox
        type="none"
        title="bg-blue-500"
        className="my-1 bg-blue-500"
      />
      <MessageBox
        type="none"
        title="bg-rose-300"
        className="my-1 bg-rose-300"
      />
      <MessageBox
        type="none"
        title="bg-rose-400"
        className="my-1 bg-rose-400"
      />
      <MessageBox
        type="none"
        title="bg-springgreen [#00FF7F]"
        className="my-1 bg-[#00FF7F]"
      />
      <h1 className="font-bold text-4xl">Very Long Paragraph</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum
        auctor erat et eleifend. Pellentesque non orci vehicula, molestie nisi
        vel, feugiat diam. Nulla et luctus nisi. Curabitur et bibendum ex.
        Pellentesque libero diam, suscipit ut metus sit amet, dapibus commodo
        sapien. Vestibulum fringilla, leo ac sollicitudin porta, massa est
        convallis massa, nec convallis purus odio in diam. Phasellus sit amet
        turpis eros. In imperdiet risus id augue blandit, id dictum erat
        fringilla. Etiam blandit elit velit, in iaculis purus posuere at. Duis
        feugiat feugiat mauris rutrum luctus. Etiam eu vestibulum odio. Sed
        lectus turpis, auctor vel justo non, blandit aliquam erat. In tincidunt
        justo magna, id finibus nibh varius sit amet. Etiam volutpat nisi
        feugiat, semper odio ac, finibus est. Nam vel cursus ante, vitae porta
        velit. Nam quam purus, luctus et odio eget, porta scelerisque augue.
        Maecenas tortor tortor, fringilla sit amet nisi in, lobortis laoreet
        tortor. Quisque quis turpis quis mauris sodales pellentesque. Aenean a
        diam sed lorem malesuada egestas ac id lorem. Fusce elementum sem
        sapien, id ultrices sapien convallis et. Aliquam ut felis nec nunc
        varius feugiat. Vestibulum eu egestas elit, bibendum cursus nunc. Mauris
        erat nulla, fringilla aliquam sapien sit amet, elementum tempus risus.
        Vivamus accumsan bibendum ipsum nec iaculis. Integer egestas odio id
        commodo rhoncus. Aenean gravida fermentum augue at fringilla. Nam massa
        lacus, consectetur sed nisl nec, gravida mattis nulla. Nunc a mi nunc.
        Vivamus viverra arcu quis lectus tincidunt, eu maximus dui scelerisque.
        Etiam ac tellus est. Sed a augue id velit congue finibus nec at ligula.
        Pellentesque in laoreet diam. Integer sollicitudin lectus elit. Mauris
        dapibus dui id felis venenatis semper. Sed egestas nibh lorem, sed
        commodo leo ultrices vitae. Vivamus eros tortor, interdum et
        pellentesque ac, tincidunt vitae tellus. Sed accumsan fringilla felis
        sit amet pharetra. Vestibulum sit amet orci iaculis, sodales odio vel,
        mollis augue. Curabitur sem dui, aliquam et gravida a, consequat in
        mauris. Proin congue mi leo, a congue ex condimentum gravida. Mauris
        vestibulum dignissim sagittis. Donec sapien mauris, condimentum at
        tristique ac, bibendum sed magna. Mauris sit amet felis turpis. Fusce in
        pretium enim. Mauris id turpis sapien. Mauris eleifend urna vitae sem
        ullamcorper, non interdum eros malesuada. Etiam venenatis hendrerit est
        vestibulum molestie. Sed et ornare dolor, sed pretium dolor. Ut vitae
        lorem ut neque dapibus malesuada. Aliquam erat volutpat. Vivamus
        ultricies bibendum finibus. Phasellus porta vulputate faucibus.
        Pellentesque varius orci quis ex sollicitudin, ut dapibus lorem
        ullamcorper. Aliquam congue lobortis est, sed luctus massa ornare a.
        Curabitur eu risus massa. Proin iaculis, tortor quis porta viverra, arcu
        metus viverra odio, non efficitur sapien lacus sed mauris. Donec mollis
        leo felis, vel dapibus ex ultricies in. Phasellus ipsum libero,
        ullamcorper vel est a, efficitur convallis massa. Praesent lacinia
        varius neque eu sollicitudin. In eu est vel urna commodo scelerisque a
        at sapien. Sed vel tristique turpis. Nam ex nunc, pulvinar et euismod
        vel, fringilla ut arcu. Suspendisse potenti. Sed eros felis, hendrerit
        eu nisl eu, finibus luctus sapien. Curabitur auctor laoreet odio, et
        pretium augue pretium quis. Nam id maximus mauris. Aenean bibendum
        feugiat viverra. Pellentesque congue cursus metus et luctus. Morbi ac
        leo a sem efficitur condimentum. Pellentesque quam odio, lobortis quis
        ligula eget, efficitur egestas libero. Fusce vitae lorem varius, gravida
        justo volutpat, ultricies risus. Etiam ultrices ultrices nibh, quis
        sollicitudin ligula tempor a. Nunc commodo vestibulum nisi vel varius.
        Aliquam ac quam condimentum, malesuada tellus ac, ultricies mi.
        Vestibulum vulputate et dolor sed vestibulum. Pellentesque vestibulum
        justo in augue volutpat faucibus. Vestibulum porttitor ligula non
        lobortis fermentum. Nulla tempor sem vitae iaculis elementum. Etiam
        suscipit aliquet sem sed cursus. Sed eu feugiat sem. Praesent hendrerit,
        metus ullamcorper sagittis blandit, augue augue tristique magna, vel
        sollicitudin dolor magna ac lorem. Morbi lectus dolor, pharetra et orci
        maximus, dapibus fermentum libero. Nam porta quam nec eros efficitur
        fermentum. Suspendisse laoreet lectus convallis massa luctus tempor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nulla facilisi. Aenean eu bibendum diam. Donec aliquam
        dapibus diam non sagittis. Curabitur ornare accumsan elementum. Sed
        nulla diam, semper vel porta a, eleifend eu sapien. Integer eu augue
        vitae nisl posuere fermentum non sed ex. Maecenas non lectus nibh. Nunc
        lobortis nisi tortor, vel condimentum arcu dapibus vel. Donec ut lorem
        in enim vulputate elementum et non risus. Aenean varius, urna sed
        lacinia facilisis, dui dui faucibus ligula, et aliquam lectus purus id
        turpis. Duis vitae efficitur velit. Nam vel tellus eu enim facilisis
        consectetur at quis mi. Etiam ut rutrum tellus. Donec elementum tellus
        ligula, at ultrices enim cursus sollicitudin. Curabitur aliquam odio
        quis felis semper tincidunt. Proin condimentum consequat libero et
        placerat. Vestibulum vitae pulvinar magna. Nullam eget purus eu tortor
        condimentum tempor vel eget nibh. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Donec eu lectus
        ante. Duis placerat posuere urna, id sollicitudin urna rutrum ut. Mauris
        quis ligula eu risus mattis blandit id non elit. Nullam congue dignissim
        venenatis. Quisque euismod tempor nisl, sed varius eros mattis
        malesuada. Nunc ultricies diam ut aliquet tincidunt. Donec lacinia
        dapibus pellentesque. Aenean cursus fringilla mauris sed semper.
        Pellentesque metus nunc, placerat et tempus aliquet, luctus sit amet
        ante. Sed vulputate viverra augue et posuere. In scelerisque est nec
        nulla consequat tempor. Nunc gravida arcu sagittis euismod lacinia.
        Praesent molestie suscipit nisi, quis pellentesque quam rutrum at.
        Maecenas sed nulla et erat volutpat consectetur sed vitae turpis.
        Integer ut malesuada ante. Nulla ultricies sed purus vitae faucibus.
        Pellentesque volutpat pharetra erat, id porta lectus luctus sit amet. In
        blandit rhoncus iaculis. Donec congue erat quis erat condimentum, nec
        pretium felis viverra. Etiam ultrices arcu non ipsum mattis euismod sit
        amet vitae diam. Suspendisse eleifend condimentum neque, eu semper leo
        luctus ut. Nulla facilisi. Mauris vulputate rutrum fringilla.
        Pellentesque et molestie tellus. Praesent at egestas ante. Sed malesuada
        erat eget leo semper, in condimentum mi pharetra. Duis non mauris
        gravida, pellentesque massa vitae, dictum lacus. Donec ligula quam,
        semper consequat semper id, dapibus nec sapien. Maecenas tristique
        turpis ut ante consectetur consequat. Nunc mollis placerat ante, vitae
        porta purus commodo vel. In rhoncus nisi vitae lorem gravida pulvinar.
        Nullam in tortor congue, vehicula lacus vitae, ultrices augue. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Proin vitae tristique felis. Pellentesque bibendum nec
        lectus eget condimentum. Cras commodo consequat tortor, vel facilisis
        arcu sollicitudin vel. Donec dictum eu augue eget tincidunt. Etiam ut
        consectetur orci, et blandit arcu. Curabitur posuere neque a nisi
        tincidunt interdum. Nunc sagittis mattis arcu, ac placerat eros
        fermentum ac. Suspendisse luctus nibh mollis, maximus magna sit amet,
        vehicula dui. Vivamus a tincidunt urna, sit amet ornare tellus.
        Vestibulum vitae finibus nunc, ut scelerisque nunc. Nunc magna urna,
        aliquam quis risus non, ullamcorper varius nulla. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Suspendisse quis pellentesque risus. Sed lacinia sem ac elit efficitur,
        nec tempor ligula euismod. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vestibulum urna dui, ornare
        sit amet lacus vehicula, consectetur pretium massa. Proin finibus lacus
        sit amet nisi aliquam, eget bibendum orci faucibus. Mauris enim nisl,
        scelerisque vitae dui id, venenatis congue lectus. Maecenas venenatis
        orci nec tristique vehicula. Nullam quis euismod neque. Aliquam in
        dignissim sapien, vitae congue orci. Cras suscipit vestibulum turpis, ac
        accumsan libero vulputate sed. Morbi eu pretium est. Duis scelerisque
        sapien ac risus eleifend, a consequat magna suscipit. Duis id convallis
        enim, ac lobortis metus. Integer aliquam ligula eget congue iaculis. Sed
        non nisi nec lectus consectetur suscipit sed at mi. Fusce in lectus
        erat. Etiam posuere sagittis risus, ac viverra leo viverra at. Nulla
        nisl augue, accumsan vel ligula sed, dapibus placerat tortor. Vestibulum
        in justo sit amet ligula efficitur scelerisque ut quis ante. Fusce
        dapibus arcu vitae erat eleifend, blandit tincidunt nisi fermentum. Nunc
        egestas rutrum libero, sed laoreet tellus semper volutpat. Sed tincidunt
        diam arcu. Aliquam condimentum laoreet convallis. Proin eget nibh non
        nibh fringilla elementum ac quis arcu. Quisque condimentum molestie
        ligula. Nunc pretium laoreet augue, eu facilisis felis viverra et.
        Mauris consequat hendrerit enim, in ornare lacus mollis in. Integer
        rutrum orci in nunc feugiat congue. In pellentesque nunc enim, vitae
        euismod ipsum mollis ac. Vestibulum at arcu quis felis fringilla
        hendrerit vitae nec tortor. Nulla in ipsum mi. Nam iaculis imperdiet
        arcu, in elementum tortor tincidunt posuere. Mauris augue nisl, varius
        eu gravida at, feugiat et tellus. Phasellus faucibus libero at ornare
        mattis. Praesent faucibus nec erat ac ornare. In vehicula quam vitae ex
        porta, a lobortis lectus finibus. Sed non diam id ex tempus efficitur
        iaculis a leo. Integer lorem erat, porta ac nunc sed, sagittis convallis
        eros. Sed metus dui, finibus nec ullamcorper eu, pulvinar a tellus.
        Maecenas vitae interdum turpis. Mauris euismod arcu vel rhoncus sodales.
        Cras lacinia neque leo, volutpat elementum augue placerat in. Mauris
        eleifend nunc tincidunt ornare ultrices. Nullam est lectus, vehicula in
        elit at, aliquam ornare augue. Morbi eros risus, pretium sagittis nunc
        at, finibus mattis risus. Fusce accumsan nec lacus non facilisis. Sed
        ornare ex in venenatis fermentum. Sed tincidunt porta enim sed finibus.
        Duis malesuada purus neque, id commodo erat scelerisque non. Nullam
        ullamcorper enim rhoncus ullamcorper porttitor. Aenean rhoncus, mauris a
        consequat volutpat, dolor lorem elementum dui, non cursus arcu metus sit
        amet libero. Proin et facilisis est, vitae commodo lectus. Pellentesque
        euismod sagittis risus sed dapibus. Duis mattis pulvinar massa, vitae
        finibus felis sagittis non. Donec quis sodales sapien, a finibus odio.
        Ut velit ante, molestie nec neque vitae, pulvinar aliquam nunc. Duis
        tristique magna justo, eu elementum tellus placerat quis. Nunc ultricies
        scelerisque velit, quis gravida ante tristique et. Maecenas tristique a
        eros eu tincidunt. Maecenas neque libero, rhoncus sit amet nibh sed,
        feugiat bibendum sapien. Nam ornare ipsum augue, eu accumsan nisl
        condimentum a. Quisque in porttitor mauris. Ut tincidunt sed nisi tempor
        placerat. Aenean fringilla, elit a consectetur fermentum, ligula mauris
        gravida nibh, sit amet commodo enim ipsum eget erat. Nunc urna felis,
        ultricies sed enim quis, consequat consequat libero. Sed et elementum
        libero. Quisque scelerisque nisi mattis lobortis dapibus. Pellentesque
        ultricies leo a sodales venenatis. Nam quis quam a orci consectetur
        mollis. Mauris hendrerit vel tortor vulputate fermentum. Vivamus ex
        diam, porttitor sed venenatis pulvinar, porttitor vel felis. Mauris
        velit diam, rhoncus at sapien quis, varius mattis nisi. Morbi tincidunt
        nulla velit. Curabitur fringilla erat nunc, at finibus quam venenatis
        eget. Fusce auctor neque et est varius viverra. Curabitur sit amet
        aliquam dui, eu dictum eros. Suspendisse quis sapien viverra sapien
        fermentum iaculis id aliquam magna. Sed magna justo, tincidunt facilisis
        lacus ut, vehicula egestas ligula. Suspendisse pellentesque enim in
        malesuada accumsan. Nulla facilisi. Cras metus leo, ultricies quis
        lectus aliquam, cursus fermentum purus. Donec a diam sed nisi iaculis
        tempor. Suspendisse tempor tellus a nulla tempus tincidunt. Nullam
        accumsan vulputate lectus. Pellentesque eu efficitur felis. Praesent
        eleifend maximus ante. Aenean vel purus dui. Cras a maximus magna. Morbi
        nibh ligula, faucibus non massa pharetra, pulvinar aliquam odio. Aenean
        urna massa, mattis id pretium vel, iaculis non mi. Integer a faucibus
        ipsum. Aliquam a leo vestibulum, dignissim metus ut, elementum lacus.
        Vestibulum ac sollicitudin dui. Cras ullamcorper arcu eu eleifend
        laoreet. Vivamus tempor fermentum rhoncus. In in viverra nibh, et
        bibendum elit. Aliquam erat volutpat. Pellentesque enim tellus, euismod
        ut sagittis a, volutpat a enim. Phasellus in mattis nisi. Donec in metus
        dapibus, hendrerit nunc a, imperdiet urna. Suspendisse est purus, semper
        in rutrum a, dictum vitae lectus. Sed sed tellus metus. Quisque sodales
        auctor est dapibus finibus. Vestibulum ac orci a elit mollis rutrum non
        ut lorem. Phasellus eu ultricies erat. Maecenas egestas elit lorem, non
        porttitor metus posuere sit amet. Sed arcu mi, blandit vel felis a,
        consectetur vulputate sapien. Curabitur commodo mollis augue, eget
        eleifend ligula blandit in. Curabitur vehicula, ante ullamcorper
        consequat faucibus, lacus urna venenatis massa, vitae faucibus orci
        augue pellentesque mauris. Vivamus consectetur venenatis condimentum.
        Donec ut malesuada mauris, eu mattis nibh. Duis rhoncus commodo mi, non
        bibendum arcu tincidunt non. Donec venenatis, quam eu sodales pharetra,
        enim lorem volutpat purus, et consequat sem dolor a tortor. Suspendisse
        finibus id mi a dictum. Phasellus elementum et orci eu elementum.
        Vivamus placerat eget lorem ac vulputate. Vestibulum vitae vestibulum
        tortor, vitae ullamcorper ipsum. Mauris nec elit eu leo venenatis
        dapibus. Aenean dui quam, molestie in aliquet eu, imperdiet eu purus.
        Donec auctor faucibus semper. Etiam facilisis arcu nec neque efficitur
        tempor. Nulla facilisi. Sed nec finibus justo. Mauris porttitor nibh
        urna, a cursus lacus sagittis id. Nullam a justo urna. Vestibulum vitae
        congue eros. Duis eget quam sit amet massa ornare congue. Praesent at
        interdum orci, eget elementum mi. Cras dictum metus quis nulla dictum,
        non convallis leo tincidunt. Sed fringilla mi eu purus sodales, ac
        pharetra dolor accumsan. Integer felis velit, hendrerit vitae ultrices
        eu, finibus eu mauris. Praesent libero augue, pulvinar ac est vitae,
        posuere tempor ipsum. Nam tristique, tellus sed malesuada placerat,
        mauris felis faucibus nulla, in mattis tellus ante a urna. Mauris
        posuere mattis varius. Fusce dapibus dignissim nisl, eu ullamcorper
        dolor vulputate eget. Curabitur non augue libero. Etiam nulla nibh,
        condimentum et enim ac, vehicula porta leo. Donec nec sapien magna.
        Suspendisse potenti. Ut fringilla sed ante ac fermentum. Nullam euismod
        ut lorem eget maximus. Suspendisse in euismod enim, vel viverra erat.
        Sed accumsan velit sodales, faucibus nisl vitae, tempus ex. Pellentesque
        ut tempor nisl. Nulla vestibulum lorem molestie dui tempus ultrices.
        Nunc leo lorem, tempor ut dui non, tristique dignissim lectus. Mauris in
        sem vehicula, consectetur neque ac, porttitor magna. Maecenas ac
        efficitur libero, a pretium velit. Vivamus posuere porta est ut
        faucibus. Mauris massa urna, vehicula quis justo sit amet, feugiat
        consectetur sapien. Sed leo justo, elementum a tortor sed, molestie
        egestas mi. Praesent eget lacinia metus, ut convallis arcu. Morbi auctor
        condimentum lacus nec scelerisque. Phasellus congue rutrum enim sed
        fringilla. Sed accumsan tincidunt elementum. Praesent semper porttitor
        est et facilisis. Suspendisse consequat interdum nisl. Proin erat neque,
        ultricies sed dolor vitae, elementum sollicitudin nisi. Curabitur
        aliquet ligula ut erat varius, ut tempor tellus gravida. Nunc et ante id
        nisi maximus aliquam. Donec tempus libero sed tincidunt bibendum.
        Quisque ultricies dapibus neque. Nulla pretium ipsum vitae mauris
        tristique, a vestibulum leo condimentum. Nullam fringilla mi quis elit
        scelerisque ullamcorper. Donec rhoncus arcu tellus, at pretium leo
        porttitor vitae. Aliquam commodo leo orci. Donec eu convallis ante, at
        pharetra erat. Vivamus ligula arcu, viverra at consectetur quis,
        tincidunt nec ligula. Donec ornare, mauris in laoreet viverra, est neque
        eleifend quam, et hendrerit erat metus nec lectus. Fusce et aliquet
        felis. Vivamus non leo mi. Quisque venenatis sem sit amet nisl
        vestibulum suscipit. Donec a pellentesque risus. Pellentesque nec elit
        justo. Phasellus eu leo facilisis, rhoncus mi nec, finibus justo. Nam
        viverra, tortor a porta ornare, velit libero aliquet enim, nec commodo
        tellus dolor nec est. Proin a turpis erat. Mauris eget tellus ut ipsum
        accumsan gravida sit amet in nulla. Praesent justo erat, suscipit vitae
        enim porttitor, auctor viverra turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Morbi a dui vel mi ullamcorper commodo.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Vestibulum sed euismod velit.
        Pellentesque dignissim lorem facilisis dapibus sollicitudin. Sed a
        fringilla leo. Phasellus semper auctor tincidunt. Curabitur tempor
        libero a velit ultricies, a maximus nunc gravida. Etiam vehicula, felis
        at porta pharetra, nisl tellus laoreet mi, a semper augue nisl nec
        massa. Fusce non mi mauris. Quisque tincidunt mauris nec tristique
        sollicitudin. Aliquam molestie pretium sodales. Maecenas tempus risus
        quis urna tincidunt posuere. Fusce a turpis sit amet eros rhoncus
        malesuada. Fusce commodo congue tellus in molestie. Nulla euismod leo
        ipsum, vitae laoreet massa sollicitudin id. Ut eu faucibus diam.
        Pellentesque mi mauris, placerat ut porttitor non, semper eu ex. Ut quis
        mi quis risus semper scelerisque. Aliquam pretium dui nisl, luctus
        molestie lacus congue vitae. Sed laoreet venenatis est vel faucibus.
        Aenean ut lorem vitae nibh bibendum ornare. Quisque sit amet bibendum
        felis. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nullam vehicula, sapien at volutpat
        ullamcorper, neque dolor pretium elit, quis volutpat diam diam auctor
        sapien. Cras eget ligula sed arcu ultricies commodo. Pellentesque
        dapibus, neque non efficitur dignissim, lectus purus porttitor metus, ut
        hendrerit sem lectus sit amet neque. Nulla pulvinar at dolor vel
        laoreet. Integer in porttitor ex. In et enim feugiat, vehicula mauris
        ornare, iaculis odio. Aliquam tempus gravida leo sed convallis. Morbi
        felis odio, vestibulum eu arcu ut, condimentum iaculis sem. Nunc
        hendrerit blandit velit, mollis fringilla urna. Nam vestibulum erat
        ligula, quis pretium mauris ultricies id. Fusce eget sem libero. Ut
        luctus quis augue vel sagittis. Sed tempus, ex eu rutrum fringilla,
        ligula arcu rhoncus arcu, quis porttitor ligula lorem a risus. Aliquam
        erat volutpat. Praesent orci enim, volutpat ut sem sit amet, ultricies
        sagittis est. Nam sagittis sollicitudin nisi, nec tempus tellus mollis
        eget. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nullam in euismod est. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Aliquam luctus lacus eget quam congue blandit. Mauris tincidunt
        pretium nulla pulvinar pulvinar. Praesent in cursus erat. Nulla nec
        tincidunt mauris. Proin et lobortis ante. Morbi id ullamcorper quam.
        Maecenas pretium, lacus vel ullamcorper eleifend, massa nunc aliquet
        eros, in interdum nunc velit a magna. Aliquam mauris urna, laoreet eu
        malesuada at, iaculis in leo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut pulvinar, orci vel euismod vestibulum, arcu nisi
        mattis massa, et tristique velit arcu eget enim. Sed pharetra convallis
        est commodo laoreet. Aliquam elit leo, ultricies a risus posuere,
        vestibulum vestibulum leo. Aenean lacus erat, pulvinar eget quam
        pulvinar, volutpat pharetra mauris. Aliquam mollis varius consectetur.
        Duis at egestas nisl. Phasellus eu tellus nisl. Donec nec ante mauris.
        Nullam dui elit, interdum quis sagittis vitae, dapibus ut elit.
        Suspendisse potenti. Sed tristique, urna ut interdum tempor, tellus arcu
        varius tellus, vitae vulputate erat lacus a lectus. Integer maximus
        convallis eros eu congue. Mauris maximus in velit nec egestas. Morbi in
        consequat sem. Nullam elit neque, elementum in eleifend in, fringilla
        non quam. Maecenas sed vestibulum elit. Donec quis ante vitae tortor
        tincidunt consequat. Mauris eu sapien eget purus cursus fringilla at et
        augue. Vivamus consectetur in erat non posuere. Vestibulum vehicula
        risus eget ullamcorper varius. Nulla facilisi. Pellentesque eget
        sollicitudin diam. Morbi viverra pellentesque elit, ac commodo purus
        ultrices ut. Aliquam congue sodales odio, sit amet luctus sapien auctor
        vitae. Vivamus rutrum ut ante sed interdum. Sed in urna sollicitudin,
        ultricies augue sed, interdum sem. Etiam magna dolor, commodo quis
        efficitur et, facilisis quis erat. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. In eu enim
        et nulla semper varius at vitae ligula. Morbi fermentum massa sed
        accumsan facilisis. Donec vitae sollicitudin ipsum. Nulla vel luctus
        turpis. Phasellus sit amet tortor ac metus tincidunt euismod a ac
        libero. Maecenas eu augue eget erat vulputate consequat. Quisque nec
        nisi at nisl aliquet pellentesque. Duis ullamcorper tellus nec felis
        congue, ut ornare justo tincidunt. Fusce in dui ultricies, aliquet est
        eget, facilisis sapien. Nunc tristique dolor sed nisi fermentum, nec
        cursus dolor tincidunt. Fusce massa turpis, pretium in mattis ut,
        viverra sit amet ipsum. Proin a magna ac lectus lobortis porttitor.
        Vestibulum luctus mauris a mauris luctus auctor. Nulla et mauris semper,
        auctor est at, pulvinar ipsum. Donec malesuada efficitur imperdiet. Sed
        sollicitudin egestas nisl quis lobortis. Morbi imperdiet maximus orci
        sit amet condimentum. Curabitur non mollis orci. Fusce scelerisque
        tempor luctus. Praesent faucibus sagittis orci, ac scelerisque metus
        volutpat id. Pellentesque feugiat sed orci vel convallis. Nam nec purus
        sed diam facilisis pharetra. Nullam commodo felis nec bibendum vehicula.
        Sed vitae ultrices risus. Sed posuere cursus urna, nec fringilla tortor
        volutpat nec. Quisque consequat elit ac vehicula rutrum. Nullam sed
        sodales orci, eu hendrerit velit. Sed at velit eget dolor molestie
        facilisis in eu nulla. Cras euismod, nulla vitae consectetur dictum,
        mauris metus mollis quam, sed rutrum purus orci ac ligula. Donec
        tristique scelerisque luctus. Quisque viverra dictum lacinia. Integer
        semper diam eget massa suscipit interdum. Morbi egestas scelerisque
        feugiat. Nullam id dictum augue, non sagittis metus. Etiam sit amet
        mollis ante, at ultrices massa. In in tortor consectetur, pellentesque
        turpis et, fringilla massa. In rutrum enim id purus volutpat vestibulum.
        Donec molestie lobortis dolor, eu cursus dolor aliquet ac. Aliquam
        dapibus rutrum interdum. Fusce cursus nec eros at egestas. Maecenas
        fringilla leo eget nisl finibus varius. Donec non tortor enim.
        Suspendisse commodo libero leo. Ut gravida turpis pellentesque metus
        egestas sodales. Quisque in dapibus quam. Fusce mollis lorem ac quam
        ultrices sollicitudin. Donec pharetra feugiat rutrum. Ut feugiat massa
        quis est eleifend, et porta metus varius. Praesent tincidunt accumsan
        nunc, ac porttitor arcu. Nam pretium quis nunc id luctus. Etiam nec
        velit nec leo luctus pharetra. Nam quis odio elementum, consequat nibh
        viverra, vestibulum sem. Suspendisse eget tincidunt orci, sit amet
        finibus ex. Donec vitae enim vel sapien iaculis volutpat ut in est.
        Aliquam eget lorem in nisl cursus tristique. Nam pulvinar et risus sit
        amet venenatis. Vestibulum vel semper sem, at sagittis nibh. Aliquam in
        elit venenatis, mattis est non, malesuada tellus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Proin luctus mauris in est volutpat facilisis. Nullam ultrices velit at
        tellus ornare, quis porttitor diam mollis. Quisque euismod mauris orci.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; In faucibus, dui a accumsan faucibus, tortor ipsum luctus
        neque, id placerat ex metus at enim. Nullam ligula eros, dignissim nec
        nibh eget, venenatis ultrices neque. Nullam consectetur ultrices
        tincidunt. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla facilisi. Sed egestas ac est et
        congue. Sed quis elementum orci. Proin semper a lectus quis commodo.
        Vivamus vestibulum sem id aliquam aliquet. Phasellus metus velit,
        rhoncus et pellentesque in, imperdiet ac ligula. Quisque sagittis at
        massa eu tincidunt. Maecenas sed placerat mi. Nam sagittis nulla a eros
        posuere tincidunt. Phasellus a ante at arcu ultrices tincidunt at ac
        tellus. Maecenas ultrices malesuada velit. Proin ac diam in dui
        malesuada egestas. Duis vel tortor nulla. Curabitur sed tempus lacus,
        molestie commodo ipsum. Vestibulum at pellentesque sapien. Nunc auctor,
        lorem ut sagittis fermentum, dolor massa iaculis arcu, euismod hendrerit
        velit risus auctor leo. Proin faucibus, est ut dapibus rhoncus, leo nunc
        porta est, non tempus enim ipsum molestie tortor. Integer vestibulum
        efficitur quam, a maximus turpis lacinia sed. Suspendisse pharetra
        libero volutpat nisi placerat aliquet. Nullam eu tempus ipsum. Donec
        facilisis dictum arcu, nec pulvinar libero facilisis sollicitudin. In et
        purus facilisis, scelerisque dui nec, fringilla enim. Phasellus laoreet
        a eros ut blandit. Phasellus mollis vulputate risus et cursus. Aliquam
        venenatis turpis nisl, a accumsan dui ultrices lobortis. Vivamus id
        turpis scelerisque, consequat enim eu, scelerisque nisl. Nullam pharetra
        sem et dictum lacinia. Aenean suscipit, velit vel commodo sollicitudin,
        mauris enim viverra urna, a venenatis ligula massa vel metus. Ut
        malesuada lectus quis condimentum finibus. Phasellus congue nunc sit
        amet cursus ullamcorper. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque porta ultricies urna ut vestibulum. Nulla metus
        nisi, convallis et tellus ac, dignissim fermentum massa. Nullam feugiat
        blandit ex, non maximus dolor vulputate ac. Phasellus ac arcu diam. Sed
        consequat dolor risus. Quisque pellentesque leo vel molestie egestas.
        Mauris accumsan dolor viverra elit placerat, varius aliquet ligula
        vulputate. Pellentesque rutrum libero quis nunc accumsan fermentum.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Fusce at purus in justo malesuada tincidunt
        vitae nec quam. Phasellus vehicula sapien sit amet dolor semper auctor.
        Nulla sit amet iaculis risus, et aliquam augue. Mauris accumsan faucibus
        tincidunt. Morbi pharetra nunc nulla. Pellentesque sed neque ipsum.
        Mauris id ornare libero. Vivamus tempor risus tincidunt eros egestas
        blandit. Suspendisse condimentum tellus ante, porta facilisis elit
        scelerisque quis. Proin massa justo, rhoncus at semper at, ornare
        euismod tortor. In urna justo, pulvinar vel risus eget, dictum dictum
        turpis. Suspendisse facilisis justo aliquam nisl rutrum sollicitudin.
        Curabitur aliquet arcu eget leo posuere pulvinar ut a sapien. Aliquam
        erat volutpat. Etiam gravida egestas bibendum. Sed convallis vel arcu
        lacinia efficitur. Sed semper a dui eu iaculis. Maecenas pulvinar a
        mauris sed imperdiet. Etiam fringilla nec lectus non finibus. Morbi nisl
        augue, eleifend nec blandit quis, cursus eu leo. In lorem neque, viverra
        ut diam id, auctor lacinia ligula. Quisque neque lacus, molestie eget
        nibh at, accumsan porta neque. Nullam non tincidunt quam. Phasellus
        lobortis turpis at ipsum euismod dictum. Sed luctus varius felis a
        convallis. Vivamus euismod ullamcorper ex ut venenatis. Fusce lorem
        metus, sagittis ut sodales eu, pretium sed felis. Suspendisse dignissim
        placerat ipsum, eu faucibus nulla sagittis et. Aliquam porttitor in ex
        et pharetra. Praesent sit amet eros turpis. Vestibulum id vehicula nunc,
        ac tempor dui. Duis lacinia egestas purus, eu commodo sapien interdum
        ut. Quisque euismod, ipsum faucibus consequat vehicula, nulla dolor
        varius ipsum, ut suscipit nulla metus sed libero. Pellentesque eget
        convallis orci, sed dapibus elit. Morbi augue ex, sagittis vel finibus
        sit amet, accumsan et nisi.
      </p>
    </div>
  );
}
