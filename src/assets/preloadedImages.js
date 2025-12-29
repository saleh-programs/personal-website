
const animations = {
    "/willowIntro?16": []
}

function preloadAll(){
    const values = Object.entries(animations)
    const allImages = []
    for (let i = 0; i < values.length; i++){
        if (animations[values[i][0]].length > 0){
            continue
        }
        const [folder, numFiles] = values[i][0].split("?")
        for (let j = 0; j < Number(numFiles); j++){
            const frame = new Image()
            frame.src = `${folder}/${j}.png`
            animations[values[i][0]].push(frame)

            allImages.push(new Promise(resolve=>{
                frame.onload = resolve
            }))
        }
    }
    const loadingImages = Promise.all(allImages).then(()=>{
        console.log("All images loaded! at ", Date.now())
    })
    return [animations, loadingImages]
}

function preload(path){
    if (animations[path].length > 0){
        return [animations[path], Promise.resolve()]
    }
    const [folder, numFiles] = path.split("?")
    const allImages = []

    for (let i = 0; i < Number(numFiles); i++){
        const frame = new Image()
        frame.src = `${folder}/${i}.png`
        animations[path].push(frame)

        allImages.push(new Promise(resolve=>{
            frame.onload = resolve
        }))
    }
    const loadingImages = Promise.all(allImages).then(()=>{
        console.log("All images loaded! at ", Date.now())
    })
    return [animations[path], loadingImages]
}

export {preload, preloadAll}