// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit

export default {
  // Global styles apply to _all_ inputs with matching section keys
  global: {
    fieldset: 'bg-[red]',
    help: 'text-base-400 text-paragraph-info text-right',
    inner: 'formkit-disabled:bg-[red] formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
    input: 'appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none',
    label: 'block',
    legend: 'bg-[red]',
    loaderIcon: 'inline-flex items-center w-4 animate-spin bg-[red]',
    message: 'text-[red] mb-1',
    messages: 'list-none p-0 mt-1 mb-0',
    outer: 'mb-4 formkit-disabled:bg-[red]',
    prefixIcon:
      'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto bg-[red]',
    suffixIcon: 'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto bg-[red]',
  },

  // Family styles apply to all inputs that share a common family
  'family:text': {
    inner: 'flex items-center focus-within:ring-offset-2 focus-within:ring-state-focused focus-within:ring-1 [&>label:first-child]:focus-within:text-[red] mb-1 border-b formkit-disabled:bg-[red]',
    input: 'w-full text-base pb-3 pt-[21px] placeholder-[red] formkit-disabled:bg-[red]',
  },
}
