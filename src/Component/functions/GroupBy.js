export function GroupBy(field, arr) {
   var arrayGroup = []

   arr.map((item) => {
    if ((arrayGroup.length !== 0) &&
            (arrayGroup.find(it => it.nmGroup === item[field]) !== undefined)
        ) {
            arrayGroup.forEach((itEacch) => {
                if (itEacch.nmGroup === item[field]) {
                    return [
                        itEacch.qtLike = itEacch.qtLike + item.like || 0,
                        itEacch.qtDisLike = itEacch.qtDisLike + item.dislike || 0,
                        itEacch.itens.push(item),

                ]
                }
            })
        } else {
            arrayGroup.push({ nmGroup: item[field], itens: [item], qtLike: item.Value })
        }
    })

    return arrayGroup;
}