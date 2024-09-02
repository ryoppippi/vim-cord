if exists('g:loaded_vim_cord')
  finish
endif

let g:loaded_vim_cord = 1


function! s:call(Callback) abort
  call denops#plugin#wait_async('vim-cord', a:Callback)
endfunction

function! s:init() abort
  let l:Callback = function('denops#notify', [
        \ 'vim-cord',
        \ 'init',
        \ []
        \])
  call s:call(l:Callback)
endfunction

command! -bang -bar VimCordInit call s:init()
