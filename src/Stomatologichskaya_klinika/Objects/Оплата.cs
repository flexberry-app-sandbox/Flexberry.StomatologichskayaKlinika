﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Stomatologichskaya_klinika
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оплата.
    /// </summary>
    // *** Start programmer edit section *** (Оплата CustomAttributes)

    // *** End programmer edit section *** (Оплата CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОплатаE", new string[] {
            "Оплачено as \'Оплачено\'",
            "ТипОплаты as \'Тип оплаты\'"})]
    [View("ОплатаL", new string[] {
            "Оплачено as \'Оплачено\'",
            "ТипОплаты as \'Тип оплаты\'"})]
    public class Оплата : ICSSoft.STORMNET.DataObject
    {
        
        private bool fОплачено;
        
        private IIS.Stomatologichskaya_klinika.ТипОплаты fТипОплаты;
        
        private IIS.Stomatologichskaya_klinika.Запись fЗапись;
        
        // *** Start programmer edit section *** (Оплата CustomMembers)

        // *** End programmer edit section *** (Оплата CustomMembers)

        
        /// <summary>
        /// Оплачено.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Оплачено CustomAttributes)

        // *** End programmer edit section *** (Оплата.Оплачено CustomAttributes)
        public virtual bool Оплачено
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Оплачено Get start)

                // *** End programmer edit section *** (Оплата.Оплачено Get start)
                bool result = this.fОплачено;
                // *** Start programmer edit section *** (Оплата.Оплачено Get end)

                // *** End programmer edit section *** (Оплата.Оплачено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Оплачено Set start)

                // *** End programmer edit section *** (Оплата.Оплачено Set start)
                this.fОплачено = value;
                // *** Start programmer edit section *** (Оплата.Оплачено Set end)

                // *** End programmer edit section *** (Оплата.Оплачено Set end)
            }
        }
        
        /// <summary>
        /// ТипОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.ТипОплаты CustomAttributes)

        // *** End programmer edit section *** (Оплата.ТипОплаты CustomAttributes)
        public virtual IIS.Stomatologichskaya_klinika.ТипОплаты ТипОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.ТипОплаты Get start)

                // *** End programmer edit section *** (Оплата.ТипОплаты Get start)
                IIS.Stomatologichskaya_klinika.ТипОплаты result = this.fТипОплаты;
                // *** Start programmer edit section *** (Оплата.ТипОплаты Get end)

                // *** End programmer edit section *** (Оплата.ТипОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.ТипОплаты Set start)

                // *** End programmer edit section *** (Оплата.ТипОплаты Set start)
                this.fТипОплаты = value;
                // *** Start programmer edit section *** (Оплата.ТипОплаты Set end)

                // *** End programmer edit section *** (Оплата.ТипОплаты Set end)
            }
        }
        
        /// <summary>
        /// Оплата.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Запись CustomAttributes)

        // *** End programmer edit section *** (Оплата.Запись CustomAttributes)
        [PropertyStorage(new string[] {
                "Запись"})]
        [NotNull()]
        public virtual IIS.Stomatologichskaya_klinika.Запись Запись
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Запись Get start)

                // *** End programmer edit section *** (Оплата.Запись Get start)
                IIS.Stomatologichskaya_klinika.Запись result = this.fЗапись;
                // *** Start programmer edit section *** (Оплата.Запись Get end)

                // *** End programmer edit section *** (Оплата.Запись Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Запись Set start)

                // *** End programmer edit section *** (Оплата.Запись Set start)
                this.fЗапись = value;
                // *** Start programmer edit section *** (Оплата.Запись Set end)

                // *** End programmer edit section *** (Оплата.Запись Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОплатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаE", typeof(IIS.Stomatologichskaya_klinika.Оплата));
                }
            }
            
            /// <summary>
            /// "ОплатаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаL", typeof(IIS.Stomatologichskaya_klinika.Оплата));
                }
            }
        }
    }
}
