function renderAsideBlocks(...blocks) {
   return (
    `<div className="aside__sections">
        ${blocks.join('\n')}
    </div>`
   )
}

export {renderAsideBlocks}