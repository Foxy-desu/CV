function renderAsideBlocks(...blocks) {
   return (
    `<div class="aside__sections">
        ${blocks.join('\n')}
    </div>`
   )
}

export {renderAsideBlocks}