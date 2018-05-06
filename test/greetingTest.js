/* @flow */
import test from 'ava'
import greeting from 'data-shape'

test('is the correct string', t => {
  t.is(greeting, 'Hello World!')
})
