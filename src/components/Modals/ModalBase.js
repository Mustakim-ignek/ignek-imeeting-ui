import ClayIcon from '@clayui/icon'
import React, { useEffect } from 'react'
import { spritemap } from '../SvgIcons/SvgIcon'
import Button from '../Button/Button'
import './ModalBase.css'

/**
 *
 * @param {{title:string,children:Element,onTrash:func,onEdit:func,onSave:func,defaultModal:string,onClose:func}} props
 */

const ModalBase = ({
  title,
  children,
  onTrash,
  onEdit,
  onSave,
  defaultModal,
  onClose
}) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <>
      <div className='modal'>
        <div
          className={`modal-dialog modal-dialog-centered ${
            defaultModal ? 'small' : 'default'
          }`}
        >
          <div className='modal-content'>
            <div className='modal-header mb-4'>
              <div className='modal-title' id='clayDefaultModalLabel'>
                {title}
              </div>
              {onEdit && (
                <button
                  type='button'
                  className='close edit mr-4 d-none d-sm-block'
                  onClick={onEdit}
                >
                  <ClayIcon spritemap={spritemap} symbol='pencil' />
                </button>
              )}
              {onTrash && (
                <button
                  type='button'
                  className='close trash mr-4 d-none d-sm-block'
                  onClick={onTrash}
                >
                  <ClayIcon spritemap={spritemap} symbol='trash' />
                </button>
              )}
              <button type='button' className='close' onClick={onClose}>
                <ClayIcon spritemap={spritemap} symbol='times' />
              </button>
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer mt-5 mt-sm-0'>
              <div className='modal-item-last w-100 '>
                <div
                  className={`btn-group w-100 justify-content-end ${
                    onEdit && onTrash ? 'd-none d-sm-flex' : ''
                  }`}
                >
                  <Button
                    label='Cancel'
                    styleType='secondary'
                    onClick={onClose}
                    style={{ marginRight: '24px' }}
                    otherclassName={`flex-grow-1 flex-sm-grow-0 px-4 py-3`}
                  />

                  <Button
                    label='Save'
                    type='submit'
                    styleType='primary'
                    onClick={onSave}
                    otherclassName={`flex-grow-1 flex-sm-grow-0 px-4 py-3`}
                  />
                </div>
                {onEdit && onTrash && (
                  <div className='btn-group w-100  d-sm-none'>
                    <Button
                      label='Edit'
                      styleType='secondary'
                      onClick={onEdit}
                      style={{ marginRight: '24px' }}
                      otherclassName={`flex-grow-1 flex-sm-grow-0 px-4 py-3`}
                    />{' '}
                    <Button
                      label='Delete'
                      type='submit'
                      styleType='danger'
                      onClick={onTrash}
                      otherclassName={`flex-grow-1 flex-sm-grow-0 px-4 py-3`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalBase
