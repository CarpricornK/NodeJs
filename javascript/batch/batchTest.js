// ↓오래걸림 안좋은 코드
// import captureWebsite from "capture-website";

// const process = (url, filename) => captureWebsite
// .file(url, filename, {
//     fullPage: true,
// })

// async function main() {
//     const from = 1434;
//     const to = 1492;
//     for (let i = from; i <= to; i++) {
//         for (const e of ["A", "B", "C", "D"]) {
//             const url = `https://codeforces.com/contest/${i}/problem/${e}`;
//             await process(url, `./IMG/${i}_${e}.png`);
//         }
//     }
//     console.log("스크래핑 완료")
// }

// main()

//위의 코드를 비동기 방식으로 변경
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";
import { go } from "fxjs";
import captureWebsite from "capture-website";

const BATCH = 5;
const process = ([url, filename]) => captureWebsite
.file(url, filename, {
    fullPage: true,
})

async function main() {
    const list = []
    const from = 1442;
    const to = 1492;

    for (let i = from; i <= to; i++) {
        for (let e of ["A", "B", "C", "D"]) {
            const url = `https://codeforces.com/contest/${i}/problem/${e}`;
            list.push([url, `./IMG/${i}_${e}.png`])
        }
    }

    await go(
        list,
        L.map(process),
        C.takeAll(BATCH),
    )
    console.log("스크래핑 완료")
    return ret;
}

main()